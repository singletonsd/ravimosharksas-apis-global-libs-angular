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

import { Consuptions } from '../models/consuptions';
import { CustomError } from '../models/customError';


import { Configuration }                                     from '../configuration';


export interface ConsuptionsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Get clients&#39; consuptions.
    * Get clients&#39; consuptions.
    * @param Token user token
    * @param LANG user LANG
    * @param RefClient 
    * @param DateVente Selling&#39;s Day. Format: YYYY-MM-DD
    * @param RefArticle 
    */
    getConsuptions(Token: string, LANG: string, RefClient?: string, DateVente?: string, RefArticle?: string, extraHttpRequestParams?: any): Observable<Array<Consuptions>>;

}