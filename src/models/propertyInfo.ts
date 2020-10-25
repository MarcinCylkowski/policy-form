export interface propertyInfo{

        postcode: String,
        houseOwnership: houseOwnership,
        rentedPremise: boolean,
        businessActivity: boolean,
        cession: boolean,
        peopleLivingNumber: number,
        underagePersonNumber: number,
        permanentlyInhabited: boolean,
        wallsType: wallsType

}

enum houseOwnership{
    OWNERSHIP,
}

enum wallsType{
    BRINCK,
    WOODEN
}