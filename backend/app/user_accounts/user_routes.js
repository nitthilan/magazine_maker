var mongoose = require('mongoose')
, User = mongoose.model('User')
, restify = require('restify');

module.exports = function (app, config, auth) {
  var log = require(config.root+'./setup/log.js').appLogger;
  var email_notification = require(config.root+'./user_accounts/email_notification.js')(config);

  function loginSteps(req, user){
    req.session.user = user._id;
  }
  function logOffSteps(req){
    req.session.reset();
  }

  //Callback for response of asyn call
  function createLoginReponse(req, res, next){
    return function(err, user){
      log.info("error "+err+" user "+user);
      if (err) { 
        logOffSteps(req);        
        res.send(403, err);
        return next();
      }
      else if (!user) {
        logOffSteps(req);
        res.send(403, new Error('Unknown user'));
      }
      else if (user.authenticate(req.params.info.password)) {
        loginSteps(req, user);
        res.send(user);
      } else {
        logOffSteps(req);
        res.send(403, new Error('Invalid password'));
      }
      return next();
    }
  }
  function createUser(req, res, next){
    return function(err, user){
      log.info("error "+err+" user "+user);
      if (err) { 
        res.send(403, err);
        return next();
      }
      else if (user) {
        res.send(403, new Error('User already exists'));
      }
      else {
        // Email th euser about the account information
        email_notification.sendUserInfo(req.params.info.email, 
          req.params.info.password);
        // Create a user into the table
        var user = new User();
        user.email = req.params.info.email;
        user.password = req.params.info.password;
        user.save(function (err, user, numberAffected) {
          if (err) res.send(err);
          else{
            res.send(user);
          }
        });
      }
      return next();
    }
  }

  // API function
  // Search by Username
  function login(req, res, next) {
    var query = User.where( 'email', new RegExp('^'+req.params.info.email+'$', 'i') );
    query.findOne(createLoginReponse(req, res, next));
  }

  function logout(req, res, next) {
    logOffSteps(req);
    res.send({});
  }
  function create(req, res, next){
    var query = User.where( 'email', new RegExp('^'+req.params.info.email+'$', 'i') );
    query.findOne(createUser(req, res, next));
  }
  function update(req, res, next){
    res.send({});
  }

  // Set up routes 

  // Ping but with user authentication
  app.get('/api/auth', auth.requiresLogin, function (req, res) {
    var id = req.session.user;
    User.findById(id, function (err, user) {
      if(err) res.send(err);
      else res.send(user);
    });
  });

  // Login
  app.post('/api/login', login);
  // Logout
  app.get('/api/logout', logout);

  app.post('/api/user', create);
  app.put('/api/user', update);
}



