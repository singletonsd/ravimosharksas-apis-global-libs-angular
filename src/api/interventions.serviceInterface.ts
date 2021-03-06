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

import { CustomError } from '../models/customError';
import { Interventions } from '../models/interventions';


import { Configuration }                                     from '../configuration';


export interface InterventionsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * 
    * Delete intervention
    * @param Token user token
    * @param LANG user LANG
    * @param InterventionId Interventions&#39; id.
    */
    delIntervention(Token: string, LANG: string, InterventionId: number, extraHttpRequestParams?: any): Observable<string>;

    /**
    * Get all Interventions filtered by values provided.
    * Get all Interventions filtered by values provided.
    * @param Token user token
    * @param LANG user LANG
    * @param InterventionId 
    * @param RefArticle 
    * @param TaskId 
    * @param ZoneResaId 
    * @param MachineId 
    * @param RefClient 
    */
    getListInterventions(Token: string, LANG: string, InterventionId?: number, RefArticle?: string, TaskId?: number, ZoneResaId?: number, MachineId?: number, RefClient?: string, extraHttpRequestParams?: any): Observable<Array<Interventions>>;

    /**
    * Modify existing intervention.
    * Modify existing intervention.
    * @param Token user token
    * @param LANG user LANG
    * @param Intervention Intervention object
    */
    putIntervention(Token: string, LANG: string, Intervention: Interventions, extraHttpRequestParams?: any): Observable<Interventions>;

    /**
    * Add new Intervention.
    * Add new Intervention.
    * @param Token user token
    * @param LANG user LANG
    * @param Visite Intervention object
    */
    setIntervention(Token: string, LANG: string, Visite: Array<Interventions>, extraHttpRequestParams?: any): Observable<Array<Interventions>>;

}
