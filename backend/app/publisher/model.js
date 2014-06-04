var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var categorySchema = new Schema({
	_id:{type: String, required:true, trim:true, index:true, unique:true, lowercase:true}
});
var articleSchema = new Schema({
	title: {type: String, required:true, trim:true},
	gist: String,
	curatorNote: String,
	imageUrl: String,
	pubDate: { type: Date, default: Date.now },
	link: {type: String, required:true, trim:true, index:true, unique:true},
	author: String,
	categories : {type:[{type:String, trim:true, lowercase:true}], default:["technology"]},
	meta: {
		numClicks: { type: Number, default: 0 }
	}
});

module.exports = mongoose.model('PubArticle',articleSchema);
module.exports = mongoose.model('PubCategories',categorySchema);
