import {OnGet, Request, Route} from '@hapiness/core';
import {TravelsService} from '../../../services';
import {LoggerService} from '@hapiness/logger';
import {Observable} from 'rxjs';
import {Travel} from '../../../interfaces';
import {tap} from 'rxjs/operators';
import {ID_PARAMETER, TRAVEL_RESPONSE} from '../../../schemas';

@Route({
    path: '/api/travel/{id}',
    method: 'GET',
    config: {
         validate: {
            params: {
                id: ID_PARAMETER
             }
         },
         response: {
            status: {
                200: TRAVEL_RESPONSE
            }
        },
        description: 'Get one travel',
        notes: 'Returns one travel for the given id in path parameter',
        tags: [ 'api', 'travel' ]
    }
})
export class GetOneTravelRoute implements OnGet {
    /**
     * Class constructor
     * @param _travelsService
     * @param _logger
     */
    constructor(private _travelsService: TravelsService, private _logger: LoggerService) {
    }

    onGet(request: Request): Observable<Travel> {
        return this._travelsService.one(request.params.id)
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
