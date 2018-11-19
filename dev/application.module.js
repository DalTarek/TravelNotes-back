"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@hapiness/core");
const logger_1 = require("@hapiness/logger");
const mongo_1 = require("@hapiness/mongo");
const swag_1 = require("@hapiness/swag");
const config_1 = require("@hapiness/config");
const travels_1 = require("./models/travels");
const services_1 = require("./services");
const get_1 = require("./routes/travels/get");
const post_1 = require("./routes/travels/post");
const put_1 = require("./routes/travels/put");
const delete_1 = require("./routes/travels/delete");
const travelsDocumentServiceFactory = (mongoClientService) => new services_1.TravelsDocumentService(mongoClientService);
let ApplicationModule = class ApplicationModule {
    /**
     * Class constructor
     *
     * @param _httpServer
     * @param {LoggerService} _logger
     */
    constructor(_httpServer, _logger) {
        this._httpServer = _httpServer;
        this._logger = _logger;
    }
    /**
     * On start process
     *
     * @return {void | Observable<any>}
     */
    onStart() {
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
    onError(error, data) {
        this._logger.error('A problem occurred during application\'s lifecycle');
    }
};
ApplicationModule = __decorate([
    core_1.HapinessModule({
        version: '1.0.0',
        imports: [
            logger_1.LoggerModule,
            swag_1.SwagModule.setConfig(config_1.Config.get('swag')),
            mongo_1.MongoModule
        ],
        declarations: [
            get_1.GetAllTravelsRoute,
            get_1.GetOneTravelRoute,
            post_1.PostCreateTravelRoute,
            put_1.PutUpdateTravelRoute,
            delete_1.DeleteOneTravelRoute,
            travels_1.TravelModel
        ],
        providers: [
            core_1.HttpServerService,
            services_1.TravelsService,
            { provide: services_1.TravelsDocumentService, useFactory: travelsDocumentServiceFactory, deps: [mongo_1.MongoClientService] }
        ]
    }),
    __metadata("design:paramtypes", [core_1.HttpServerService, logger_1.LoggerService])
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=application.module.js.map