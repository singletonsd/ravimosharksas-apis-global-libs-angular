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

import { Contracts } from '../models/contracts';
import { CustomError } from '../models/customError';


import { Configuration }                                     from '../configuration';


export interface ContractsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Get all client&#39;s contracts.
    * Get all client&#39;s contracts.
    * @param Token user token
    * @param LANG user LANG
    * @param Active Return only active contracts or all.
    * @param RefClient Only for techniciens.
    * @param RefContract Only for techniciens.
    */
    getContractList(Token: string, LANG: string, Active?: boolean, RefClient?: string, RefContract?: number, extraHttpRequestParams?: any): Observable<Array<Contracts>>;

}
