import { FC } from "react";
import { ICustomerInfoProp } from "../../helper/interfaces/customer_data";
import {
    CustomerDataWrapper,
    CustomerDetail,
    CustomerInfoDiv,
    CustomerName,
    DetailTitle,
    DetailValue
} from "../../style/components/customer_data";
import { formatDate } from "../../helper/utils";

const CustomerInfo: FC<ICustomerInfoProp> = ({ customer }) => {
    const {
        contactName,
        phone1,
        phone2,
        canContactPhone,
        email,
        canSendMail,
        agreeTerms,
        agreeCommercials,
        lastModifiedDate,
        observations
    } = customer;

    return (
        <CustomerDataWrapper>
            <CustomerInfoDiv>
                <CustomerName>{contactName}</CustomerName>
                <CustomerDetail>
                    <DetailTitle>Observations:</DetailTitle>
                    <DetailValue>{observations}</DetailValue>
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Phone 1:</DetailTitle>
                    <DetailValue>{phone1}</DetailValue>
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Phone 2:</DetailTitle>
                    <DetailValue>{phone2}</DetailValue>
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Email:</DetailTitle>
                    <DetailValue>{email}</DetailValue>
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Can contact by phone:</DetailTitle>
                    <DetailValue>{canContactPhone ? 'Yes' : 'No'}</DetailValue>
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Can send mail:</DetailTitle>
                    <DetailValue>{canSendMail ? 'Yes' : 'No'}</DetailValue>
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Agree terms:</DetailTitle>
                    <DetailValue>{agreeTerms ? 'Yes' : 'No'}</DetailValue>
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Agree commercials:</DetailTitle>
                    <DetailValue>
                        {agreeCommercials ? 'Yes' : 'No'}
                    </DetailValue>
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Last modified date:</DetailTitle>
                    <DetailValue>{formatDate(lastModifiedDate)}</DetailValue>
                </CustomerDetail>
            </CustomerInfoDiv>
        </CustomerDataWrapper>
    )
}

export default CustomerInfo