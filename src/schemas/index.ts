import * as Joi from 'joi';

export const ID_PARAMETER = Joi.required();

export const TRAVEL_PAYLOAD = Joi.object().keys({
    photo: Joi.string(),
    departure: Joi.date().raw().required(),
    arrival: Joi.date().raw().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    numberPerson: Joi.number().required(),
    hotel: Joi.string(),
    price: Joi.string().required(),
    description: Joi.string()
}).options({ stripUnknown: true });

export const TRAVEL_RESPONSE = Joi.object().keys({
    _id: ID_PARAMETER,
    photo: Joi.reach(TRAVEL_PAYLOAD, 'photo'),
    departure: Joi.reach(TRAVEL_PAYLOAD, 'departure'),
    arrival: Joi.reach(TRAVEL_PAYLOAD, 'arrival'),
    country: Joi.reach(TRAVEL_PAYLOAD, 'country'),
    city: Joi.reach(TRAVEL_PAYLOAD, 'city'),
    numberPerson: Joi.reach(TRAVEL_PAYLOAD, 'numberPerson'),
    hotel: Joi.reach(TRAVEL_PAYLOAD, 'hotel'),
    price: Joi.reach(TRAVEL_PAYLOAD, 'price'),
    description: Joi.reach(TRAVEL_PAYLOAD, 'description')
});

export const TRAVELS_RESPONSE = Joi.array().items(
    TRAVEL_RESPONSE
).unique().min(1);
