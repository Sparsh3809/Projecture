const Joi = require('joi');

module.exports.projectSchema = Joi.object({
    project: Joi.object({
        name:Joi.string().required(),
        people:Joi.string().required().min(0).max(8),
        domain : Joi.string().required(),
        description:Joi.string().required()
    }).required()
})