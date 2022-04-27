const mongoose = require("mongoose");
const schema = mongoose.Schema(
	{   
		name: {
			type: String,
			required: [true, 'Menu name is required']
		},
		price: String,
		processingtime: String,
		image: String,
		trend: Boolean
	},
	{
		timestamps: true
	}
)
schema.method('toJSON', function(){
	const { __v, _id, ...object} = this.toObject();
	object.id = _id;
	return object;
});
module.exports = mongoose.model('menu', schema);