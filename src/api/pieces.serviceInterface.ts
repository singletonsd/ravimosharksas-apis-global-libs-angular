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
import { Pieces } from '../models/pieces';


import { Configuration }                                     from '../configuration';


export interface PiecesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Get all Pieces filtered by values provided.
    * Get all Pieces filtered by values provided.
    * @param Token user token
    * @param LANG user LANG
    * @param RefArticle 
    * @param DesignationArticle 
    * @param IntituleFamille 
    * @param DetergentType 
    * @param Category subcategoryname &#x3D;&#x3D; WaterTreatment, Dishwasher, Detergents, MACHINES, REPAIRED_PIECES, 
    */
    getListPieces(Token: string, LANG: string, RefArticle?: string, DesignationArticle?: string, IntituleFamille?: string, DetergentType?: string, Category?: string, extraHttpRequestParams?: any): Observable<Array<Pieces>>;

}
