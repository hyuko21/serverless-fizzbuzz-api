import { celebrate, Joi, Segments } from 'celebrate'

export const FizzBuzzValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    number: Joi.number().required(),
  })
})
