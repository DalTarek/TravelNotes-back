import {HTTPHandlerResponse, OnPost, Request, Route} from '@hapiness/core';
import {TravelsService} from '../../../services';
import {LoggerService} from '@hapiness/logger';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {TRAVEL_PAYLOAD, TRAVEL_RESPONSE} from '../../../schemas';

@Route({
    path: '/api/travels',
    method: 'POST',
    config: {
        validate: {
            payload: TRAVEL_PAYLOAD
        },
        payload: {
            output: 'data',
            allow: 'application/json',
            parse: true
        },
        response: {
            status: {
                201: TRAVEL_RESPONSE
            }
        },
        description: 'Create one travel',
        notes: 'Create a new travel and returns it',
        tags: [ 'api', 'travels' ]
    }
})
export class PostCreateTravelRoute implements OnPost {
    /**
     * Class constructor
     * @param _travelsService
     * @param _logger
     */
    constructor(private _travelsService: TravelsService, private _logger: LoggerService) {
    }

    /**
     *
     * @param request
     */
    onPost(request: Request): Observable<HTTPHandlerResponse> {
        return this._travelsService.create(request.payload)
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
