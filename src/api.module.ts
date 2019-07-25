import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ActivityService } from './api/activity.service';
import { AddressService } from './api/address.service';
import { CartService } from './api/cart.service';
import { ClientsService } from './api/clients.service';
import { ConsuptionsService } from './api/consuptions.service';
import { ContractsService } from './api/contracts.service';
import { EmailService } from './api/email.service';
import { InterventionsService } from './api/interventions.service';
import { LoginService } from './api/login.service';
import { MachinesService } from './api/machines.service';
import { OrderService } from './api/order.service';
import { PasswordService } from './api/password.service';
import { PiecesService } from './api/pieces.service';
import { ProductsService } from './api/products.service';
import { TachesService } from './api/taches.service';
import { UserService } from './api/user.service';
import { VisitesService } from './api/visites.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ActivityService,
    AddressService,
    CartService,
    ClientsService,
    ConsuptionsService,
    ContractsService,
    EmailService,
    InterventionsService,
    LoginService,
    MachinesService,
    OrderService,
    PasswordService,
    PiecesService,
    ProductsService,
    TachesService,
    UserService,
    VisitesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
