import {Model, MongoClientService, MongoModel} from '@hapiness/mongo';

@MongoModel({
    adapter: 'mongoose',
    collection: 'travel'
})
export class TravelModel extends Model {
    readonly schema: any;

    constructor(private _mongoClientService: MongoClientService) {
        // call parent constructor
        super(TravelModel);
        // get dao
        const dao = this._mongoClientService.getDao(this.connectionOptions);

        // create schema
        this.schema = new dao.Schema({
            photo: {
                type: String,
                trim: true
            },
            departure: {
                type: Date,
                required: true
            },
            arrival: {
                type: Date,
                required: true
            },
            country: {
                type: String,
                required: true,
                trim: true
            },
            city: {
                type: String,
                required: true,
                trim: true
            },
            numberPerson: {
                type: Number,
                required: true
            },
            hotel: {
                type: String,
                trim: true
            },
            price: {
                type: String,
                required: true,
                trim: true
            },
            description: {
                type: String,
                trim: true
            }
        }, {
            versionKey: false
        });
    }
}
