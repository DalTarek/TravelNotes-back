import {OnGet, Request, Route} from '@hapiness/core';
import {TravelsService} from '../../../services';
import {LoggerService} from '@hapiness/logger';
import {Observable} from 'rxjs';
import {Travel} from '../../../interfaces';
import {tap} from 'rxjs/operators';
import {TRAVELS_RESPONSE} from '../../../schemas';

@Route({
    path: '/api/travels',
    method: 'GET',
    config: {
        response: {
            status: {
                200: TRAVELS_RESPONSE
            }
        },
        description: 'Get all travels',
        notes: 'Returns an array of travels or 204',
        tags: [ 'api', 'travels' ]
    }
})
export class GetAllTravelsRoute implements OnGet {
    /**
     * Class constructor
     * @param _travelsService
     * @param _logger
     */
    constructor(private _travelsService: TravelsService, private _logger: LoggerService) {
    }

    onGet(request: Request): Observable<Travel[] | void> {
        return this._travelsService.listAll()
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
