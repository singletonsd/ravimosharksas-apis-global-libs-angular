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
import { Session } from '../models/session';


import { Configuration }                                     from '../configuration';


export interface LoginServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Callback from facebook auth.
    * Get the user parameters.
    */
    facebookCallback(extraHttpRequestParams?: any): Observable<Session>;

    /**
    * Login by email and password.
    * Login
    * @param LANG user LANG
    * @param email User&#39;s email.
    * @param password User&#39;s password.
    */
    login(LANG: string, email: string, password: string, extraHttpRequestParams?: any): Observable<Session>;

    /**
    * Login by Facebook account.
    * URL to redirect to facebook page.
    */
    loginFacebook(extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Google token
    * getting user details from G
    * @param Token user token
    * @param LANG user LANG
    * @param Googletoken Googletoken
    */
    loginGoogle(Token: string, LANG: string, Googletoken: string, extraHttpRequestParams?: any): Observable<Session>;

    /**
    * Provide Session Token
    *  Provide Session Token and user.Name, NumberOfCartElements, user.refclient
    */
    startSession(extraHttpRequestParams?: any): Observable<Session>;

}
