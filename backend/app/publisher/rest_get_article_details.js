var mongoose = require('mongoose');
var Channel = mongoose.model('Channel');
var Article = mongoose.model('Article');
module.exports = function(app, auth, config, baseUrl){
	var log = require(config.root+'./setup/log.js').restLogger;
	var rest_validation = require(config.root+'./rest_api_base/rest_validation.js');
	var articlefetcher = require(config.root+'./curator/articlefetcher.js')();
	var resourceUrl = baseUrl+"/fetch";
	var fillFetchedArticle = function(res){
		return function(err, data){
			if(err){
				log.info("Error in getting article info "+err);
				if(res) return res.send(err);
			}
			else{
				return res.send(data);
			}
		}
	}
	// getting the list of all subscriptions
	app.get(resourceUrl, 
		/*auth.requiresLogin,*/ 
		rest_validation.validateGet,
		function(req, res, next){
			var articleUrl = req.params.articleUrl;
			log.info("article url "+articleUrl.slice(1,articleUrl.length-1));
  			articlefetcher.fetch(articleUrl.slice(1,articleUrl.length-1), 0, fillFetchedArticle(res));
			next();
		});
}