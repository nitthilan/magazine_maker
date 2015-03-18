var restify = require('restify') ,
    mongoose = require('mongoose');

module.exports = function (app, config, auth){ //, smtpTransport) {

  // Is application alive ping
  app.get('/api', function (req, res) {
    console.log(req.params);
    res.send({'message':'Success'});
  });

  //
  // I looked at header based API versioning, not a fan, but also when I tried this, the atatic resource GETs hang
  //    app.get({path : '/db', version : '1.0.0'}, ...
  //    app.get({path : '/db', version : '2.0.0'}, ...

  // Is database alive ping
  app.get('/db', function (req, res) {
    var result = '';
    mongoose.connection.db.executeDbCommand({'ping':'1'}, function(err, dbres) {
      if (err === null) {
        res.send(dbres);
      } else {
        res.send(err);
      }
    });
  });

  require(config.root + './user_accounts/user_routes.js')(app, config, auth);
  require(config.root + './rest_api_base/rest_api_base.js')(app, auth, config, "/curator/categories", mongoose.model('Categories'));
  require(config.root + './publisher/rest_get_article_details.js')(app, auth, config, "/curator/articles");  
  require(config.root + './rest_api_base/rest_api_base.js')(app, auth, config, "/curator/pubarticles", mongoose.model('PubArticle'));
  require(config.root + './rest_api_base/rest_api_base.js')(app, auth, config, "/curator/magazineSetting", mongoose.model('MagazineSetting'));
  require(config.root + './publisher/rest_all_pubarticles.js')(app, auth, config, "/curator/magazineSetting");
  require(config.root + './rest_api_base/rest_api_base.js')(app, auth, config, "/curator/feedback", mongoose.model('feedback'));

  app.get(/\/?.*/, restify.serveStatic({
    directory: config.static_path,
    default:'index.html',
    maxAge: 0
  }));
  
}

