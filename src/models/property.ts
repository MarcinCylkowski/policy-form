export interface property{

    propertyType: PropertyType,
    yearOfConstruct: String,
    areaOfApartment: number,
    equipmentInsuranceSum: number,
    personalThingsInsuranceSum: number,
    wallsInsuranceSum: number

}

enum PropertyType
{ 
    HOME,
    APARTMENTt
}