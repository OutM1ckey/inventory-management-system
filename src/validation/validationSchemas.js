const Joi = require('joi');

const createProductSchema = Joi.object({
    name: Joi.string().max(50).required().messages({
        'string.base': 'Name must be a string.',
        'string.empty': 'Name is required.',
        'string.max': 'Name cannot exceed 50 characters.',
        'any.required': 'Name is required.',
    }),
    description: Joi.string().max(50).required().messages({
        'string.base': 'Description must be a string.',
        'string.empty': 'Description is required.',
        'string.max': 'Description cannot exceed 50 characters.',
        'any.required': 'Description is required.',
    }),
    price: Joi.number().min(0).required().messages({
        'number.base': 'Price must be a number.',
        'number.empty': 'Price is required.',
        'number.min': 'Price must be at least 0.',
        'number.max': 'Price cannot exceed 50 characters.',
        'any.required': 'Price is required.',
    }),
    stock: Joi.number().integer().min(0).required().messages({
        'number.base': 'Stock must be a number.',
        'number.empty': 'Stock is required.',
        'number.min': 'Stock cannot be negative.',
        'number.max': 'Stock cannot exceed 50 characters.',
        'any.required': 'Stock is required.',
    }),
});

const restockProductSchema = Joi.object({
    increaseStock: Joi.number().min(0).required().messages({
        'number.base': 'increaseStock must be a number.',
        'number.empty': 'increaseStock is required.',
        'number.min': 'increaseStock must be at least 0.',
        'number.max': 'increaseStock cannot exceed 50 characters.',
        'any.required': 'increaseStock is required.',
    }),
});

const sellProductSchema = Joi.object({
    decreaseStock: Joi.number().min(0).required().messages({
        'number.base': 'decreaseStock must be a number.',
        'number.empty': 'decreaseStock is required.',
        'number.min': 'decreaseStock must be at least 0.',
        'number.max': 'decreaseStock cannot exceed 50 characters.',
        'any.required': 'decreaseStock is required.',
    }),
});

const orderSchema = Joi.object({
    customerId: Joi.string().required().messages({
        'string.base': 'customerId must be a string.',
        'string.empty': 'customerId is required.',
        'string.max': 'customerId cannot exceed 50 characters.',
        'any.required': 'customerId is required.',
    }),
    products: Joi.array()
        .items(
            Joi.object({
                productId: Joi.string().required().messages({
                    'string.base': 'productId must be a string.',
                    'string.empty': 'productId is required.',
                    'any.required': 'productId is required.',
                }),
                quantity: Joi.number().integer().min(1).required().messages({
                    'number.base': 'quantity must be a number.',
                    'number.min': 'quantity must be at least 1.',
                    'number.max': 'quantity cannot exceed 50 characters.',
                    'any.required': 'quantity is required.',
                }),
            })
        )
        .min(1)
        .required()
        .messages({
            'array.base': 'products must be an array.',
            'array.min': 'At least one product is required.',
            'any.required': 'products are required.',
        }),
});

module.exports = { createProductSchema, restockProductSchema, sellProductSchema, orderSchema };
