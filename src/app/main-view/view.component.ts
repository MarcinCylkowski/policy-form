import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  policy = {

    agreemnet1: null,

    name: "",
    surname: "",
    familyName: "",
    pesel: "",
    phoneNumber: "",
    email: "",
    maritalStatus: "",

    scope: "",
    street: "",
    houseNumber: "",
    flatNumber: "",
    postcode: "",
    city: "",


    propertyType: "",
    yearOfConstruct: "",
    areaOfApartment: null,
    equipmentInsuranceSum: null,
    personalThingsInsuranceSum: null,
    wallsInsuranceSum: null,

    postcode2: "",
    houseOwnership: "",
    rentedPremise: null,
    businessActivity: null,
    cession: null,
    peopleLivingNumber: null,
    underagePersonNumber: null,
    permanentlyInhabited: null,
    wallsType: "",

    security: "",
    multiLatchLocks: null,
    certifiedLocks: null,
    insuredLengthInYears: null,
    houseLastYearClaims: null,
    houseLastTwoYearsClaims: null,
    houseLastThreeYearsClaims: null,
    houseLastTwentyYearsFloods: null,
    insuredPersonNumber: null,
    clientType: ""

  }

  constructor(private MainService: MainService){
    
  }
}