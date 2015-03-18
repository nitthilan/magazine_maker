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

var magazineSettingSchema = new Schema({
	title:{type: String, required:true, trim:true, unique:true},
	about:{type: String, required:true, trim:true},
	categories:[{type:String, trim:true, lowercase:true}],
	topCategories:[{type:String, trim:true, lowercase:true}],
	curatorName:{type: String, trim:true},
	maxArticlesPerPage:{type: Number, default: 100},
	creatorId: {type:ObjectId, required:true}
});

exports.articleSchema = articleSchema;

mongoose.model('PubArticle',articleSchema);
mongoose.model('MagazineSetting',magazineSettingSchema);
mongoose.model('Categories',categorySchema);
