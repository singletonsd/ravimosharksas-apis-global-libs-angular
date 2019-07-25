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

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { PasswordServiceInterface }                            from './password.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class PasswordService implements PasswordServiceInterface {

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
     * Change password by providing old password.
     * change user password
     * @param LANG user LANG
     * @param passwordOld Old password
     * @param passwordNew Old password
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changePasswordWithOldPassword(LANG: string, passwordOld: string, passwordNew: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public changePasswordWithOldPassword(LANG: string, passwordOld: string, passwordNew: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public changePasswordWithOldPassword(LANG: string, passwordOld: string, passwordNew: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public changePasswordWithOldPassword(LANG: string, passwordOld: string, passwordNew: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling changePasswordWithOldPassword.');
        }

        if (passwordOld === null || passwordOld === undefined) {
            throw new Error('Required parameter passwordOld was null or undefined when calling changePasswordWithOldPassword.');
        }

        if (passwordNew === null || passwordNew === undefined) {
            throw new Error('Required parameter passwordNew was null or undefined when calling changePasswordWithOldPassword.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (passwordOld !== undefined && passwordOld !== null) {
            queryParameters = queryParameters.set('passwordOld', <any>passwordOld);
        }
        if (passwordNew !== undefined && passwordNew !== null) {
            queryParameters = queryParameters.set('passwordNew', <any>passwordNew);
        }

        let headers = this.defaultHeaders;
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

        return this.httpClient.patch<string>(`${this.basePath}/user/password`,
            null,
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
     * Change password by providing email&#39;s token.
     * Request a new password with forget token.
     * @param newPassword Forgot password token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changePasswordWithToken(newPassword: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public changePasswordWithToken(newPassword: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public changePasswordWithToken(newPassword: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public changePasswordWithToken(newPassword: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling changePasswordWithToken.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (newPassword !== undefined && newPassword !== null) {
            queryParameters = queryParameters.set('newPassword', <any>newPassword);
        }

        let headers = this.defaultHeaders;

        // authentication (appToken) required
        if (this.configuration.apiKeys["X_APP_ID"]) {
            headers = headers.set('X_APP_ID', this.configuration.apiKeys["X_APP_ID"]);
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

        return this.httpClient.get<string>(`${this.basePath}/user/password`,
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
     * Send email to user who lost password
     * forgotPassword
     * @param LANG user LANG
     * @param email User&#39;s email
     * @param killSessions If session&#39;s asociated with that email must be cleared.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forgotPasswordClient(LANG: string, email: string, killSessions: boolean, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public forgotPasswordClient(LANG: string, email: string, killSessions: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public forgotPasswordClient(LANG: string, email: string, killSessions: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public forgotPasswordClient(LANG: string, email: string, killSessions: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling forgotPasswordClient.');
        }

        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling forgotPasswordClient.');
        }

        if (killSessions === null || killSessions === undefined) {
            throw new Error('Required parameter killSessions was null or undefined when calling forgotPasswordClient.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', <any>email);
        }
        if (killSessions !== undefined && killSessions !== null) {
            queryParameters = queryParameters.set('killSessions', <any>killSessions);
        }

        let headers = this.defaultHeaders;
        if (LANG !== undefined && LANG !== null) {
            headers = headers.set('LANG', String(LANG));
        }

        // authentication (appToken) required
        if (this.configuration.apiKeys["X_APP_ID"]) {
            headers = headers.set('X_APP_ID', this.configuration.apiKeys["X_APP_ID"]);
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

        return this.httpClient.post<string>(`${this.basePath}/user/password/forgot`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
