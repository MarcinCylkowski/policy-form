export interface policy {


    agreemnet1: boolean;
    name: String;
    surname: String;
    familyName: String;
    pesel: String;
    phoneNumber: String;
    email: String;
    maritalStatus: maritalStatus;
    
    scope: scope;
    street: String;
    houseNumber: String;
    flatNumber: String;
    postcode: string;
    city: String;

    propertyType: PropertyType;
    yearOfConstruct: String;
    areaOfApartment: number;
    equipmentInsuranceSum: number;
    personalThingsInsuranceSum: number;
    wallsInsuranceSum: number;

    housePostcode: String;
    houseOwnership: houseOwnership;
    rentedPremise: boolean;
    businessActivity: boolean;
    cession: boolean;
    peopleLivingNumber: number;
    underagePersonNumber: number;
    permanentlyInhabited: boolean;
    wallsType: wallsType;

    security: security;
    multiLatchLocks: number;
    certifiedLocks: number;
    insuredLengthInYears: number;
    houseLastYearClaims: number;
    houseLastTwoYearsClaims: number;
    houseLastThreeYearsClaims: number;
    houseLastTwentyYearsFloods: number;
    insuredPersonNumber: number;
    clientType: string;
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
enum maritalStatus {

    SINGLE,
    MARRIED,
    DIVORCED,
    WIDOW,
    WIDOWER
}
enum PropertyType {
    HOME,
    APARTMENTT
}
enum houseOwnership {
    OWNERSHIP,
    COOPERATIVE_OWNERSHIP,
    LENDING_AGREEMENT,
    COOPERATIVE_TENANTS,
    LEASE_AGREEMENT,
    PERPETUAL_USE,
    FOR_RENT
}

enum wallsType {
    BRINCK,
    WOODEN
}