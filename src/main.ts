import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/AppModule';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
    return console.error(err);
  });
