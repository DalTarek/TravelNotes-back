import {HTTPHandlerResponse, Injectable} from '@hapiness/core';
import {TravelsDocumentService} from './travels-document.service';
import {Observable, of, throwError} from 'rxjs';
import {Travel} from '../interfaces';
import {catchError, flatMap, map} from 'rxjs/operators';
import {Biim} from '@hapiness/biim';

@Injectable()
export class TravelsService {
    /**
     * Class constructor
     */
    constructor(private _travelsDocumentService: TravelsDocumentService) {
    }

    listAll(): Observable<Travel[] | void> {
        return this._travelsDocumentService.find();
    }

    one(id: string): Observable<Travel> {
        return this._travelsDocumentService.findById(id)
            .pipe(
                catchError(e => throwError(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        throwError(Biim.notFound(`Travels with id '${id}' not found`))
                )
            );
    }

    create(travel: Travel): Observable<HTTPHandlerResponse> {
        return this._addTravel(travel)
            .pipe(
                flatMap(_ => this._travelsDocumentService.create(_)),
                catchError(e =>
                    throwError(Biim.preconditionFailed(e.message))
                ),
                map(_ => ({ response: _, statusCode: 201 }))
            );
    }

    update(id: string, travel: Travel): Observable<Travel> {
        return this._travelsDocumentService.findByIdAndUpdate(id, travel)
            .pipe(
                catchError(e =>
                    throwError(Biim.preconditionFailed(e.message))
                ),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        throwError(Biim.notFound(`Travel with id '${id}' not found`))
                )
            );
    }

    delete(id: string): Observable<void> {
        return this._travelsDocumentService.findByIdAndRemove(id)
            .pipe(
                catchError(e => throwError(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(undefined) :
                        throwError(Biim.notFound(`Travel with id '${id}' not found`))
                )
            );
    }

    private _addTravel(travel: Travel): Observable<any> {
        return of(travel);
    }
}
