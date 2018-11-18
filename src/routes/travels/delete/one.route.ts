import {OnDelete, Request, Route} from '@hapiness/core';
import {TravelsService} from '../../../services';
import {Observable} from 'rxjs';
import {ID_PARAMETER} from '../../../schemas';

@Route({
    path: '/api/travels/{id}',
    method: 'DELETE',
    config: {
        validate: {
            params: {
                id: ID_PARAMETER
            }
        },
        description: 'Delete one travel',
        notes: 'Delete one travel for the given id in path parameter',
        tags: [ 'api', 'travels']
    }
})
export class DeleteOneTravelRoute implements OnDelete {
    /**
     * Class constructor
     * @param _travelsService
     */
    constructor(private _travelsService: TravelsService) {
    }

    /**
     *
     * @param request
     */
    onDelete(request: Request): Observable<void> {
        return this._travelsService.delete(request.params.id);
    }
}
