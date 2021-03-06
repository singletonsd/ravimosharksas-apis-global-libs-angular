# RAVIMOSHARK - APIS - GLOBAL - LIBS - ANGULAR

## LIBRARY NAME: [@ravimosharksas/apis-global-libs-angular](https://www.npmjs.com/package/@ravimosharksas/apis-global-libs-angular)

Angular client for Ravimoshark SAS API designed by [Singleton](http://singletonsd.com). You  can find out more about Swagger at [Singleton Web Page](http://singletonsd) or on [Ravimoshark Web Page](https://ravimoshark.com).
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.0
- Package version: 2.0.0

For more information, please visit [http://singletonsd.com/soporte](http://singletonsd.com/soporte)

## CONSUMING

Navigate to the folder of your consuming project and run one of next commands.

```javascript
npm install @ravimosharksas/apis-global-libs-angular --save
```

## GENERAL USE

In your Angular project:

```javascript
// without configuring providers
import { ApiModule } from '@ravimosharksas/apis-global-libs-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ApiModule,
        HttpClientModule
    ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```javascript
// configuring providers
import { ApiModule, Configuration, ConfigurationParameters } from '@ravimosharksas/apis-global-libs-angular';

export function apiConfigFactory (): Configuration => {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  }
  return new Configuration(params);
}

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```javascript
import { DefaultApi } from '@ravimosharksas/apis-global-libs-angular';

export class AppComponent {
  constructor(private apiGateway: DefaultApi) { }
}
```

Note: The ApiModule is restricted to being instantiated once app wide.
This is to ensure that all services are treated as singletons.

### USING MULTIPLE SWAGGER FILES / APIS / APIMODULES

In order to use multiple `ApiModules` generated from different swagger files,
you can create an alias name when importing the modules
in order to avoid naming conflicts:

```javascript
import { ApiModule } from 'my-api-path';
import { ApiModule as OtherApiModule } from 'my-other-api-path';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ApiModule,
    OtherApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule
  ]
})
export class AppModule {

}
```

### SET SERVICE BASE PATH

If different than the generated base path, during app bootstrap, you can provide the base path to your service.

```javascript
import { BASE_PATH } from '@ravimosharksas/apis-global-libs-angular';

bootstrap(AppComponent, [
    { provide: BASE_PATH, useValue: 'https://your-web-service.com' },
]);
```

or

```javascript
import { BASE_PATH } from '@ravimosharksas/apis-global-libs-angular';

@NgModule({
    imports: [],
    declarations: [ AppComponent ],
    providers: [ provide: BASE_PATH, useValue: 'https://your-web-service.com' ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

### USING @angular/cli

First extend your `src/environments/*.ts` files by adding the corresponding base path:

```javascript
export const environment = {
  production: false,
  API_BASE_PATH: 'http://127.0.0.1:8080'
};
```

In the src/app/app.module.ts:

```javascript
import { BASE_PATH } from '@ravimosharksas/apis-global-libs-angular';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## BUILDING

To install the required dependencies and to build the typescript sources run:

```javascript
npm install
npm run build
```

----------------------

© [Singleton](http://singletonsd.com), Argentina, 2019.
