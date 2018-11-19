"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.ID_PARAMETER = Joi.string().required();
exports.TRAVEL_PAYLOAD = Joi.object().keys({
    photo: Joi.string(),
    departure: Joi.date().timestamp().raw().required(),
    arrival: Joi.date().timestamp().raw().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    numberPerson: Joi.string().required(),
    hotel: Joi.string(),
    price: Joi.string().required(),
    description: Joi.string()
});
exports.TRAVEL_RESPONSE = Joi.object().keys({
    id: exports.ID_PARAMETER,
    photo: Joi.reach(exports.TRAVEL_PAYLOAD, 'photo'),
    departure: Joi.reach(exports.TRAVEL_PAYLOAD, 'departure'),
    arrival: Joi.reach(exports.TRAVEL_PAYLOAD, 'arrival'),
    country: Joi.reach(exports.TRAVEL_PAYLOAD, 'country'),
    city: Joi.reach(exports.TRAVEL_PAYLOAD, 'city'),
    numberPerson: Joi.reach(exports.TRAVEL_PAYLOAD, 'numberPerson'),
    hotel: Joi.reach(exports.TRAVEL_PAYLOAD, 'hotel'),
    price: Joi.reach(exports.TRAVEL_PAYLOAD, 'price'),
    description: Joi.reach(exports.TRAVEL_PAYLOAD, 'description')
});
exports.TRAVELS_RESPONSE = Joi.array().items(exports.TRAVEL_RESPONSE).unique().min(1);
//# sourceMappingURL=index.js.map