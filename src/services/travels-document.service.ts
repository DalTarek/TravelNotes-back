import {Injectable} from '@hapiness/core';
import {MongoClientService} from '@hapiness/mongo';
import {from, Observable} from 'rxjs';
import {MongooseDocument} from 'mongoose';
import {map} from 'rxjs/operators';
import {Travel} from '../interfaces';
import {TravelModel} from '../models/travels';

@Injectable()
export class TravelsDocumentService {
    private _document: any;

    constructor(private _mongoClientService: MongoClientService) {
        this._document = this._mongoClientService.getModel({ adapter: 'mongoose' }, TravelModel);
    }

    /**
     * Call mongoose method, call toJSON on each result and returns Travel[] or undefined
     *
     * @return {Observable<Travel[] | void>}
     */
    find(): Observable<Travel[] | void> {
        return from(this._document.find({}))
            .pipe(
                map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined)
            );
    }

    findById(id: string): Observable<Travel | void> {
        return from(this._document.findById(id))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined)
            );
    }

    create(travel: Travel): Observable<Travel> {
        return from(this._document.create(travel))
            .pipe(
                map((doc: MongooseDocument) => doc.toJSON())
            );
    }

    findByIdAndUpdate(id: string, travel: Travel): Observable<Travel | void> {
        return from(this._document.findByIdAndUpdate(id, travel, { new: true }))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined)
            );
    }

    findByIdAndRemove(id: string): Observable<Travel | void> {
        return from(this._document.findByIdAndRemove(id))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined)
            )
    }
}
