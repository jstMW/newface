import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([NoopAnimationsModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};