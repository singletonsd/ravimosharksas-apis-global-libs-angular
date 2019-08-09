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
import { Machines } from './machines';
import { ZoneResas } from './zoneResas';


export interface Taches { 
    id?: number;
    clientsAddress?: Addresses;
    machine?: Machines;
    zoneResa?: ZoneResas;
    dateAppel?: string;
    typeInter?: string;
    descriptionPanne?: string;
    prioritePrice?: number;
    date_Depan?: string;
    mo?: number;
    descriptionDepan?: string;
    savpayant?: boolean;
    initiator?: string;
    code?: number;
    gpsStatusCode?: number;
    techRating?: number;
    clientRating?: number;
}