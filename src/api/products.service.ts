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

import { Categories } from '../models/categories';
import { CustomError } from '../models/customError';
import { Products } from '../models/products';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { ProductsServiceInterface }                            from './products.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService implements ProductsServiceInterface {

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
     * Get categories of products.
     * Get categories of products.
     * @param Token user token
     * @param LANG user LANG
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategories(Token: string, LANG: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Categories>>;
    public getCategories(Token: string, LANG: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Categories>>>;
    public getCategories(Token: string, LANG: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Categories>>>;
    public getCategories(Token: string, LANG: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Token === null || Token === undefined) {
            throw new Error('Required parameter Token was null or undefined when calling getCategories.');
        }

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling getCategories.');
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

        return this.httpClient.get<Array<Categories>>(`${this.basePath}/categories`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get list of products by category.
     * Get list of products by category.
     * @param Token user token
     * @param LANG user LANG
     * @param Category subcategoryname &#x3D;&#x3D; WaterTreatment, Dishwasher, Detergents, MACHINES, REPAIRED_PIECES, 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getListProducts(Token: string, LANG: string, Category?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Products>>;
    public getListProducts(Token: string, LANG: string, Category?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Products>>>;
    public getListProducts(Token: string, LANG: string, Category?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Products>>>;
    public getListProducts(Token: string, LANG: string, Category?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Token === null || Token === undefined) {
            throw new Error('Required parameter Token was null or undefined when calling getListProducts.');
        }

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling getListProducts.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (Category !== undefined && Category !== null) {
            queryParameters = queryParameters.set('Category', <any>Category);
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

        return this.httpClient.get<Array<Products>>(`${this.basePath}/productsList`,
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
     * Get detail of products filtered.
     * Get detail of products filtered.
     * @param Token user token
     * @param LANG user LANG
     * @param Category subcategoryname &#x3D;&#x3D; WaterTreatment, Dishwasher, Detergents, MACHINES, REPAIRED_PIECES, 
     * @param RefArticle Article&#39;s reference
     * @param DesignationArticle 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProducts(Token: string, LANG: string, Category?: string, RefArticle?: string, DesignationArticle?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Products>>;
    public getProducts(Token: string, LANG: string, Category?: string, RefArticle?: string, DesignationArticle?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Products>>>;
    public getProducts(Token: string, LANG: string, Category?: string, RefArticle?: string, DesignationArticle?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Products>>>;
    public getProducts(Token: string, LANG: string, Category?: string, RefArticle?: string, DesignationArticle?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Token === null || Token === undefined) {
            throw new Error('Required parameter Token was null or undefined when calling getProducts.');
        }

        if (LANG === null || LANG === undefined) {
            throw new Error('Required parameter LANG was null or undefined when calling getProducts.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (Category !== undefined && Category !== null) {
            queryParameters = queryParameters.set('Category', <any>Category);
        }
        if (RefArticle !== undefined && RefArticle !== null) {
            queryParameters = queryParameters.set('RefArticle', <any>RefArticle);
        }
        if (DesignationArticle !== undefined && DesignationArticle !== null) {
            queryParameters = queryParameters.set('DesignationArticle', <any>DesignationArticle);
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

        return this.httpClient.get<Array<Products>>(`${this.basePath}/products`,
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
