import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least 3 characters',
    'string.max': 'Name should have at most 20 characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?\d{10,15}$/)
    .required()
    .messages({
      'string.base': 'Phone number should be a string',
      'string.pattern.base':
        'Phone number should be in the format +380000000000',
      'any.required': 'Phone number is required',
    }),
  email: Joi.string().email().min(3).max(20).required().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
    'string.min': 'Email should have at least 3 characters',
    'string.max': 'Email should have at most 20 characters',
    'any.required': 'Email is required',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': '"Favourite" should be a boolean',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'string.base': 'Contact type should be a string',
      'any.only': 'Contact type must be one of: work, home, personal',
      'any.required': 'Contact type is required',
    }),
  userId: Joi.string().messages({
    'string.base': 'userId should be a string',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least 3 characters',
    'string.max': 'Name should have at most 20 characters',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?\d{10,15}$/)
    .messages({
      'string.base': 'Phone number should be a string',
      'string.pattern.base':
        'Phone number should be in the format +380000000000',
    }),
  email: Joi.string().email().min(3).max(20).messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
    'string.min': 'Email should have at least 3 characters',
    'string.max': 'Email should have at most 20 characters',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': '"Favourite" should be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'Contact type should be a string',
    'any.only': 'Contact type must be one of: work, home, personal',
  }),
});
