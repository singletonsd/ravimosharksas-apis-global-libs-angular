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

import { Categories } from '../models/categories';
import { CustomError } from '../models/customError';
import { Products } from '../models/products';


import { Configuration }                                     from '../configuration';


export interface ProductsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Get categories of products.
    * Get categories of products.
    * @param Token user token
    * @param LANG user LANG
    */
    getCategories(Token: string, LANG: string, extraHttpRequestParams?: any): Observable<Array<Categories>>;

    /**
    * Get list of products by category.
    * Get list of products by category.
    * @param Token user token
    * @param LANG user LANG
    * @param Category subcategoryname &#x3D;&#x3D; WaterTreatment, Dishwasher, Detergents, MACHINES, REPAIRED_PIECES, 
    */
    getListProducts(Token: string, LANG: string, Category?: string, extraHttpRequestParams?: any): Observable<Array<Products>>;

    /**
    * Get detail of products filtered.
    * Get detail of products filtered.
    * @param Token user token
    * @param LANG user LANG
    * @param Category subcategoryname &#x3D;&#x3D; WaterTreatment, Dishwasher, Detergents, MACHINES, REPAIRED_PIECES, 
    * @param RefArticle Article&#39;s reference
    * @param DesignationArticle 
    */
    getProducts(Token: string, LANG: string, Category?: string, RefArticle?: string, DesignationArticle?: string, extraHttpRequestParams?: any): Observable<Array<Products>>;

}