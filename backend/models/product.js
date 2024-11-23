const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the product name'],
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter the product category'],
        // enum: {
        //     values: [
        //         'Skincare', 
        //         'Shampoos', 
        //         'MakeUp', 
        //         'Fragrances'
        //     ],
        //     message: 'Please select correct category for product'
        // }
    },
    price: {
        type: Number,
        required: [true, 'Please enter the product price'],
        max: [10000, 'Product price cannot exceed 10,000'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a product description'],
        maxLength: [500, 'Product description cannot exceed 500 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);
