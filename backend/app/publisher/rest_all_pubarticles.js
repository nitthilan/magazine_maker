var restify = require('restify');
var mongoose = require('mongoose');

module.exports = function(app, auth, config, baseUrl){
  var log = require(config.root+'./setup/log.js').appLogger;
  //var model = mongoose.model('Categories');
  var rest_validation = require(config.root+'./rest_api_base/rest_validation.js');
  var resourceUrl = baseUrl+"/:magazineSettingId/pubarticle";
  var articleSchema = require(config.root+'./publisher/model.js').articleSchema;

  var getModel = function(id){
    mongoose.model(id+'pubArticle', articleSchema);
    return mongoose.model(id+'pubArticle');
  }



  var sendResponse = function(res, next){
	return function(error, data){
		if(error) res.send(error);
		else if(data === null ) res.send (new Error("no data for given id"));
		else res.send(data);
		next();
	};
  }
  // getting the list of all subscriptions
  /*app.get(resourceUrl, 
  	//auth.requiresLogin,
  	rest_validation.validateGet,
  	function(req, res, next){ 
      var model = getModel(req.params.magazineSettingId);
  		model.find({}, '', function(error, data){
			//log.info("Query "+query);
			if(error) return callback(error);
			else if(data.length == 0) return res.send(new Error("No articles"));
			else res.send(data);
			next();
		});
  });*/

  app.post(resourceUrl, 
  	/*auth.requiresLogin,*/ 
  	rest_validation.validatePost,
  	function(req, res, next){ 
      var model = getModel(req.params.magazineSettingId);
      model.create(req.params.info, sendResponse(res, next)); 
    });

  var idUrlConfig = { url : resourceUrl+"/:id", validation : { id:{ isRequired:true, scope:'params' } } }  
  app.put(idUrlConfig, 
  	/*auth.requiresLogin,*/ 
  	rest_validation.validatePost,
  	function(req, res, next){
      var model = getModel(req.params.magazineSettingId);
  		model.findByIdAndUpdate(req.params.id, req.params.info, sendResponse(res, next)); 
  	});

  app.get(idUrlConfig, 
  	/*auth.requiresLogin,*/ 
  	rest_validation.validateGet,
  	function(req, res, next){ 
      var model = getModel(req.params.magazineSettingId);
      model.findById(req.params.id, sendResponse(res, next)); 
    });
   
  app.del(idUrlConfig, 
  	/*auth.requiresLogin,*/ 
  	function(req, res, next){ 
      var model = getModel(req.params.magazineSettingId);
      model.findByIdAndRemove(req.params.id, sendResponse(res, next)); 
    });

  //var queryUrl = resourceUrl+"/query"; 
  var resourceUrlConfig = {
    url:resourceUrl, validation: {
      categories: { isRequired: false, scope: 'params' },
      numDays: {isRequired: false, isInt:true, scope:'params'},
      maxNumArticles : {isRequired: false, isInt:true, scope:'params'}
  }};
  // getting the list of all subscriptions
  app.get(resourceUrlConfig, 
    /*auth.requiresLogin,*/ 
    rest_validation.validateGet,
    function(req, res, next){
      var model = getModel(req.params.magazineSettingId); 
      var dbQuery = model.find({});   
      if(req.params.categories) {
        var category_list = req.params.categories.split(" ");
        dbQuery = model.find({ categories: { $all: category_list } });
        //log.info("Value "+category_list.length);
      }
      
      if(req.params.numDays) {
        var delayDate = new Date();
        delayDate.setDate(delayDate.getDate()-req.params.numDays);
        dbQuery = dbQuery.where('pubDate').lt(new Date()).gt(delayDate).sort('-pubDate');
      }
      if(req.params.maxNumArticles){
        dbQuery = dbQuery.limit(req.params.maxNumArticles);
      }

      dbQuery.exec(function(error, data){
        //log.info("Query "+query);
        if(error) return callback(error);
        else if(data.length == 0) return res.send({});
        else res.send(data);
        next();
      });
  });  
}

/*
var d = new Date(),
hour = d.getHours(),
min = d.getMinutes(),
month = d.getMonths(),
year = d.getFullYear(),
sec = d.getSeconds(),
day = d.getDate();


Submission.find({
  // First Case: Hour 
  created: { $lt: new Date(), $gt: new Date(year+','+month+','+day+','+hour+','+min+','+sec) } // Get results from start of current hour to current time.
  // Second Case: Day 
  created: { $lt: new Date(), $gt: new Date(year+','+month+','+day) } // Get results from start of current day to current time.
  // Third Case: Month
  created: { $lt: new Date(), $gt: new Date(year+','+month) } // Get results from start of current month to current time.
  // Fourth Case: Year 
  created: { $lt: new Date(), $gt: new Date(year) } // Get results from start of current year to current time.
})
*/
