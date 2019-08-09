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

import { Activities } from '../models/activities';
import { CustomError } from '../models/customError';


import { Configuration }                                     from '../configuration';


export interface ActivityServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Get user&#39;s activities.
    * Get user&#39;s activities.
    * @param Token user token
    * @param LANG user LANG
    * @param Start Start Date. Format: YYYY-MM-DD
    * @param End End date. Format: YYYY-MM-DD
    * @param RefClient Only for techniciens.
    */
    getListActivities(Token: string, LANG: string, Start?: string, End?: string, RefClient?: string, extraHttpRequestParams?: any): Observable<Activities>;

    /**
    * Get user&#39;s activities in a pdf file.
    * Get user&#39;s activities in a pdf file.
    * @param Token user token
    * @param LANG user LANG
    * @param Start Start date. Format: YYYY-MM-DD
    * @param End End date. Format: YYYY-MM-DD
    * @param RefClient 
    */
    getListActivitiesInPDF(Token: string, LANG: string, Start?: string, End?: string, RefClient?: string, extraHttpRequestParams?: any): Observable<Blob>;

}