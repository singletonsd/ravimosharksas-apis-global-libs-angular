/**
 * Ravimo Global API
 * Ravimo Mobile and Web Global API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: joseph.assouline@ravimoshark.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { Clients } from '../models/clients';
import { CustomError } from '../models/customError';


import { Configuration }                                     from '../configuration';


export interface ClientsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Get all Clients filtered by values provided.
    * Get all Pieces filtered by values provided.
    * @param Token user token
    * @param LANG user LANG
    * @param RefClient 
    * @param Abrege 
    * @param Nom 
    * @param Secteur 
    */
    getListClients(Token: string, LANG: string, RefClient?: string, Abrege?: string, Nom?: string, Secteur?: number, extraHttpRequestParams?: any): Observable<Array<Clients>>;

}
