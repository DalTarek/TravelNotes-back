import { HapinessModule, HttpServerService, OnError, OnStart } from '@hapiness/core';
import { LoggerModule, LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import {MongoClientService, MongoModule} from '@hapiness/mongo';
import {SwagModule} from '@hapiness/swag';
import {Config} from '@hapiness/config';
import {TravelModel} from './models/travels';
import { TravelsDocumentService, TravelsService} from './services';

const travelsDocumentServiceFactory = (mongoClientService: MongoClientService) => new TravelsDocumentService(mongoClientService);

@HapinessModule({
    version: '1.0.0',
    imports: [
        LoggerModule,
        SwagModule.setConfig(Config.get('swag')),
        MongoModule
    ],
    declarations: [
        TravelModel
    ],
    providers: [
        HttpServerService,
        TravelsService,
        { provide: TravelsDocumentService, useFactory: travelsDocumentServiceFactory, deps: [ MongoClientService ]}
    ]
})
export class ApplicationModule implements OnStart, OnError {
    /**
     * Class constructor
     *
     * @param _httpServer
     * @param {LoggerService} _logger
     */
    constructor(private _httpServer: HttpServerService, private _logger: LoggerService) {
    }

    /**
     * On start process
     *
     * @return {void | Observable<any>}
     */
    onStart(): void | Observable<any> {
        this._logger.info(`< Application.bootstrap > Server started at: ${this._httpServer.instance().info.uri}`);
    }

    /**
     * On error process
     *
     * @param {Error} error
     * @param data
     *
     * @return {void | Observable<any>}
     */
    onError(error: Error, data?: any): void | Observable<any> {
        this._logger.error('A problem occurred during application\'s lifecycle');
    }
}
