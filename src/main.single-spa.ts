
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';
import { AppModule } from './app/app.module';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

const lifecycles = singleSpaAngular({
  bootstrapFunction:  () => {
    return new Promise((resolve, reject) => {
      platformBrowserDynamic(getSingleSpaExtraProviders())
        .bootstrapModule(AppModule)
        .then(resolve)
        .catch((err) => {
          console.error('Error during bootstrap:', err);
          reject(new Error('Failed to bootstrap the application.'));
        });
    });
  },
  template: '<app-layout-root></app-layout-root>',
  NgZone
});

console.log('Exporting lifecycle functions:');
export const { bootstrap, mount, unmount } = lifecycles;
console.log('Lifecycle functions:', { bootstrap, mount, unmount });