import { ICustomer, ICustomerWeb } from "../api";

export interface ICustomerInfoProp {
    customer: ICustomer;
}

export interface ICustomerWebsInfoProp {
    id: number;
}

export interface ISortingView {
    id: boolean; 
    contactName: boolean; 
    phone1: boolean; 
    phone2: boolean; 
    email: boolean; 
    createdDate: boolean; 
    sectorId: boolean; 
    customerCategoryId: boolean; 
}
