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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CustomError } from '../models/customError';
import { Interventions } from '../models/interventions';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { InterventionsServiceInterface }                            from './interventions.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class InterventionsService implements InterventionsServiceInterface {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Delete intervention
     * @param Token user token
     * @param LANG user LANG
     * @param InterventionId Interventions&#39; id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public delIntervention(Token: string, LANG: string, InterventionId: number, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public delIntervention(Token: string, LANG: string, InterventionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public delIntervention(Token: string, LANG: string, InterventionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public delIntervention(Token: string, LANG: string, InterventionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Token === null || Token === undefined) {
            throw new Error('Required parameter Token was null or undefined when calling delIntervention.');
        }

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling delIntervention.');
        }

        if (InterventionId === null || InterventionId === undefined) {
            throw new Error('Required parameter InterventionId was null or undefined when calling delIntervention.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (InterventionId !== undefined && InterventionId !== null) {
            queryParameters = queryParameters.set('InterventionId', <any>InterventionId);
        }

        let headers = this.defaultHeaders;
        if (Token !== undefined && Token !== null) {
            headers = headers.set('Token', String(Token));
        }
        if (LANG !== undefined && LANG !== null) {
            headers = headers.set('LANG', String(LANG));
        }

        // authentication (appToken) required
        if (this.configuration.apiKeys["X_APP_ID"]) {
            headers = headers.set('X_APP_ID', this.configuration.apiKeys["X_APP_ID"]);
        }

        // authentication (userToken) required
        if (this.configuration.apiKeys["X_USER_KEY"]) {
            headers = headers.set('X_USER_KEY', this.configuration.apiKeys["X_USER_KEY"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json'
        ];

        return this.httpClient.delete<string>(`${this.basePath}/interventions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getListInterventions(Token: string, LANG: string, InterventionId?: number, RefArticle?: string, TaskId?: number, ZoneResaId?: number, MachineId?: number, RefClient?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Interventions>>;
    public getListInterventions(Token: string, LANG: string, InterventionId?: number, RefArticle?: string, TaskId?: number, ZoneResaId?: number, MachineId?: number, RefClient?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Interventions>>>;
    public getListInterventions(Token: string, LANG: string, InterventionId?: number, RefArticle?: string, TaskId?: number, ZoneResaId?: number, MachineId?: number, RefClient?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Interventions>>>;
    public getListInterventions(Token: string, LANG: string, InterventionId?: number, RefArticle?: string, TaskId?: number, ZoneResaId?: number, MachineId?: number, RefClient?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Token === null || Token === undefined) {
            throw new Error('Required parameter Token was null or undefined when calling getListInterventions.');
        }

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling getListInterventions.');
        }







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (InterventionId !== undefined && InterventionId !== null) {
            queryParameters = queryParameters.set('InterventionId', <any>InterventionId);
        }
        if (RefArticle !== undefined && RefArticle !== null) {
            queryParameters = queryParameters.set('RefArticle', <any>RefArticle);
        }
        if (TaskId !== undefined && TaskId !== null) {
            queryParameters = queryParameters.set('TaskId', <any>TaskId);
        }
        if (ZoneResaId !== undefined && ZoneResaId !== null) {
            queryParameters = queryParameters.set('ZoneResaId', <any>ZoneResaId);
        }
        if (MachineId !== undefined && MachineId !== null) {
            queryParameters = queryParameters.set('MachineId', <any>MachineId);
        }
        if (RefClient !== undefined && RefClient !== null) {
            queryParameters = queryParameters.set('RefClient', <any>RefClient);
        }

        let headers = this.defaultHeaders;
        if (Token !== undefined && Token !== null) {
            headers = headers.set('Token', String(Token));
        }
        if (LANG !== undefined && LANG !== null) {
            headers = headers.set('LANG', String(LANG));
        }

        // authentication (appToken) required
        if (this.configuration.apiKeys["X_APP_ID"]) {
            headers = headers.set('X_APP_ID', this.configuration.apiKeys["X_APP_ID"]);
        }

        // authentication (userToken) required
        if (this.configuration.apiKeys["X_USER_KEY"]) {
            headers = headers.set('X_USER_KEY', this.configuration.apiKeys["X_USER_KEY"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json'
        ];

        return this.httpClient.get<Array<Interventions>>(`${this.basePath}/interventions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Modify existing intervention.
     * Modify existing intervention.
     * @param Token user token
     * @param LANG user LANG
     * @param Intervention Intervention object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putIntervention(Token: string, LANG: string, Intervention: Interventions, observe?: 'body', reportProgress?: boolean): Observable<Interventions>;
    public putIntervention(Token: string, LANG: string, Intervention: Interventions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Interventions>>;
    public putIntervention(Token: string, LANG: string, Intervention: Interventions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Interventions>>;
    public putIntervention(Token: string, LANG: string, Intervention: Interventions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Token === null || Token === undefined) {
            throw new Error('Required parameter Token was null or undefined when calling putIntervention.');
        }

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling putIntervention.');
        }

        if (Intervention === null || Intervention === undefined) {
            throw new Error('Required parameter Intervention was null or undefined when calling putIntervention.');
        }

        let headers = this.defaultHeaders;
        if (Token !== undefined && Token !== null) {
            headers = headers.set('Token', String(Token));
        }
        if (LANG !== undefined && LANG !== null) {
            headers = headers.set('LANG', String(LANG));
        }

        // authentication (appToken) required
        if (this.configuration.apiKeys["X_APP_ID"]) {
            headers = headers.set('X_APP_ID', this.configuration.apiKeys["X_APP_ID"]);
        }

        // authentication (userToken) required
        if (this.configuration.apiKeys["X_USER_KEY"]) {
            headers = headers.set('X_USER_KEY', this.configuration.apiKeys["X_USER_KEY"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Interventions>(`${this.basePath}/interventions`,
            Intervention,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Add new Intervention.
     * Add new Intervention.
     * @param Token user token
     * @param LANG user LANG
     * @param Visite Intervention object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setIntervention(Token: string, LANG: string, Visite: Array<Interventions>, observe?: 'body', reportProgress?: boolean): Observable<Array<Interventions>>;
    public setIntervention(Token: string, LANG: string, Visite: Array<Interventions>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Interventions>>>;
    public setIntervention(Token: string, LANG: string, Visite: Array<Interventions>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Interventions>>>;
    public setIntervention(Token: string, LANG: string, Visite: Array<Interventions>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Token === null || Token === undefined) {
            throw new Error('Required parameter Token was null or undefined when calling setIntervention.');
        }

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling setIntervention.');
        }

        if (Visite === null || Visite === undefined) {
            throw new Error('Required parameter Visite was null or undefined when calling setIntervention.');
        }

        let headers = this.defaultHeaders;
        if (Token !== undefined && Token !== null) {
            headers = headers.set('Token', String(Token));
        }
        if (LANG !== undefined && LANG !== null) {
            headers = headers.set('LANG', String(LANG));
        }

        // authentication (appToken) required
        if (this.configuration.apiKeys["X_APP_ID"]) {
            headers = headers.set('X_APP_ID', this.configuration.apiKeys["X_APP_ID"]);
        }

        // authentication (userToken) required
        if (this.configuration.apiKeys["X_USER_KEY"]) {
            headers = headers.set('X_USER_KEY', this.configuration.apiKeys["X_USER_KEY"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<Interventions>>(`${this.basePath}/interventions`,
            Visite,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
