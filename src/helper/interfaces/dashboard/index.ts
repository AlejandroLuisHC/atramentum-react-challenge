import { ICustomer } from "../api";

export interface ICustomersTableProp {
    customers: ICustomer[];
}

export interface IItemsTable {
    contactName: boolean;
    phone1: boolean;
    phone2: boolean;
    email: boolean;
    createdDate: boolean;
    sectorId: boolean;
    customerCategoryId: boolean;
}