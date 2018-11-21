import {OnPut, Request, Route} from '@hapiness/core';
import {TravelsService} from '../../../services';
import {LoggerService} from '@hapiness/logger';
import {Observable} from 'rxjs';
import {Travel} from '../../../interfaces';
import {tap} from 'rxjs/operators';
import {ID_PARAMETER, TRAVEL_PAYLOAD, TRAVEL_RESPONSE} from '../../../schemas';

@Route({
    path: '/api/travel/{id}',
    method: 'PUT',
    config: {
        validate: {
            params: {
                id: ID_PARAMETER
            },
            payload: TRAVEL_PAYLOAD
        },
        payload: {
            output: 'data',
            allow: 'application/json',
            parse: true
        },
        response: {
            status: {
                200: TRAVEL_RESPONSE
            }
        },
        description: 'Update one travel',
        notes: 'Update the travel for the given id in path parameter and returns it',
        tags: [ 'api', 'travel' ]
    }
})
export class PutUpdateTravelRoute implements OnPut {
    /**
     * Class constructor
     * @param _travelsService
     * @param _logger
     */
    constructor(private _travelsService: TravelsService, private _logger: LoggerService) {
    }

    onPut(request: Request): Observable<Travel> {
        return this._travelsService.update(request.params.id, request.payload)
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
