var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var feedbackSchema = new Schema({
	name: {type: String, required:true, trim:true},
	oneliner: {type: String, required:true, trim:true, index:true, unique:true},
	feedback: {type: String, required:true, trim:true},
	createDate: { type: Date, default: Date.now },
	numVotes: { type: Number, default: 0 }
});

mongoose.model('feedback',feedbackSchema);