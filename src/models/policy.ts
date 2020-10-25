import { adress } from './adress';
import { bussines } from './bussines';
import { propertyInfo } from './propertyInfo';
import {property} from './property';
import {customer} from './customer';


export class policy {

    homeInsurance: boolean;
    otherInsurance: boolean;
    agreementPersonalData: boolean;
    agreementPhoneMarketing: boolean;
    agreementElectronicMarketing: boolean;
    startDate: Date;
    scope: scope;
    security: security;
    multiLatchLocks: number;
    certifiedLocks: number;
    insuredLengthInYears: number;
    houseLastYearClaims: number;
    houseLastTwoYearsClaims: number;
    houseLastThreeYearsClaims: number;
    houseLastTwentyYearsFloods: number;
    insuredPersonNumber: number;
    clientType: clientType;
    property: property;
    propertyInfo: propertyInfo;
    customer: customer;
    bussines: bussines;
    adress: adress;


}

enum scope {
    EQUIPMENT,
    PERSONAL_THINGS,
    WALLS,
    BURGLARY,
    OC_INSURANCE
}
enum security {
    INTERCOM,
    ALARM,
    SECURITY_DOORS,
    MONITORING,
    SECURITY_WINDOWS,
    SECURITY_AGENCY

}

enum clientType{
    SOLE_TRADER
}