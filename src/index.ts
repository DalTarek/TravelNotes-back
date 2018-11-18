// * NOTE :: leave this until @hapiness/core will be migrated to rxjs v6 - This library is installed automatically
import 'rxjs-compat';
import { Hapiness, HttpServerExt } from '@hapiness/core';
import { LoggerExt } from '@hapiness/logger';

import { ApplicationModule } from './application.module';

// bootstrap application
Hapiness.bootstrap(ApplicationModule, [
    LoggerExt,
    HttpServerExt.setConfig({ host: '0.0.0.0', port: 4443 })
])
    .catch(err => console.log(err));