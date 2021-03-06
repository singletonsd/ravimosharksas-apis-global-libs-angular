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
import { Addresses } from './addresses';
import { Contracts } from './contracts';
import { Interventions } from './interventions';
import { Locations } from './locations';
import { Orders } from './orders';
import { Taches } from './taches';
import { Visites } from './visites';


export interface Activities { 
    addresses?: Array<Addresses>;
    orders?: Array<Orders>;
    contracts?: Array<Contracts>;
    taches?: Array<Taches>;
    interventions?: Array<Interventions>;
    visites?: Array<Visites>;
    locations?: Array<Locations>;
}
