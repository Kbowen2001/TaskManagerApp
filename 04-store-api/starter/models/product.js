
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'product name must be provided'],
        maxlength: [100, 'product name can not be more than 100 characters']
    },
    price:{
        type: Number,
        required: [true, 'product price must be provided']
    },
    feature:{
        type: Boolean,
        default: false
    },  
    rating:{
        type: Number,
        default: 4.5
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Product', ProductSchema);
