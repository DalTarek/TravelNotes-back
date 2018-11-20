import { OnGet, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Travel } from '../../../interfaces';
import { TRAVEL_RESPONSE } from '../../../schemas';
import { TravelsService } from '../../../services';

@Route({
    path: '/api/travel/random',
    method: 'GET',
    config: {
        response: {
            status: {
                200: TRAVEL_RESPONSE
            }
        },
        description: 'Get one person randomly',
        notes: 'Returns one person randomly or 204',
        tags: [ 'api', 'people' ]
    }
})
export class GetRandomTravelRoute implements OnGet {
    /**
     * Class constructor
     * @param _peopleService
     * @param _logger
     */
    constructor(private _travelsService: TravelsService, private _logger: LoggerService) {
    }

    /**
     * OnGet implementation
     * @param request
     */
    onGet(request: Request): Observable<Travel | void> {
        return this._travelsService.random()
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
