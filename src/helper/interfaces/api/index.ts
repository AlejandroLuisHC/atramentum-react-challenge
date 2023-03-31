export interface ICustomer {
    id: number;
    phone1: string;
    phone2: string;
    sectorId: number | null;
    activated: boolean;
    agreeCommercials: boolean;
    agreeTerms: boolean;
    email: string;
    password: string;
    originPage: number;
    commercialAgentId: number | null;
    customerCategoryId: number;
    fareRateId: number;
    sendCsvDaily: boolean;
    sendCsvWeekly: boolean;
    dataCsvFtp: string;
    refererTypeId: number;
    refererOthersInfo: string;
    performanceTypeId: number;
    observations: string;
    canContactPhone: boolean;
    canSendMail: boolean;
    contactName: string;
    contactTime: string;
    numberAccessWeb: number;
    preferredCompanyBankAccountId: number | null;
    eccomerceId: number | null;
    downloadCsv: boolean;
    ordersOnlyPaymentProof: boolean;
    ordersOnlyMoneyInAccount: boolean;
    deleted: boolean;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}

export interface ICustomerEdit {
    id?: number;
    phone1?: string;
    phone2?: string;
    sectorId?: number | null;
    activated?: boolean;
    agreeCommercials?: boolean;
    agreeTerms?: boolean;
    email?: string;
    password?: string;
    originPage?: number;
    commercialAgentId?: number | null;
    customerCategoryId?: number;
    fareRateId?: number;
    sendCsvDaily?: boolean;
    sendCsvWeekly?: boolean;
    dataCsvFtp?: string;
    refererTypeId?: number;
    refererOthersInfo?: string;
    performanceTypeId?: number;
    observations?: string;
    canContactPhone?: boolean;
    canSendMail?: boolean;
    contactName?: string;
    contactTime?: string;
    numberAccessWeb?: number;
    preferredCompanyBankAccountId?: number | null;
    eccomerceId?: number | null;
    downloadCsv?: boolean;
    ordersOnlyPaymentProof?: boolean;
    ordersOnlyMoneyInAccount?: boolean;
    deleted?: boolean;
    createdBy?: string;
    createdDate?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
}

export interface IApiResponse {
    totalElements: number;
    totalPages: number;
    pageNumber: number;
    isFirst: boolean;
    isLast: boolean;
    pageSize: number;
    content: ICustomer[];
}

export interface IFetchCustomersArgs {
    pageNumber?: number;
}

export interface ICustomerWeb {
    id: number;
    customerId: number;
    url: string;
    deleted: boolean;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}

export interface ICustomerWebEdit {
    id?: number;
    customerId?: number;
    url?: string;
    deleted?: boolean;
    createdBy?: string;
    createdDate?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
}

export interface IApiResponseWeb {
    totalElements: number;
    totalPages: number;
    pageNumber: number;
    isFirst: boolean;
    isLast: boolean;
    pageSize: number;
    content: ICustomerWeb[];
}

export interface IFetchCustomerWebssArgs {
    customerId?: number;
}