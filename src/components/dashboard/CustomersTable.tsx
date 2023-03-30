import { FC } from 'react';
import { ICustomersTableProp } from '../../helper/interfaces/dashboard';
import { StyledTable, StyledTd, StyledTh } from '../../style/components/dashboard';

const CustomersTable: FC<ICustomersTableProp> = ({ customers }) => {
    return (
        <StyledTable>
            <tbody>
                <tr>
                    <StyledTh>Customer ID</StyledTh>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>Phone 1</StyledTh>
                    <StyledTh>Phone 2</StyledTh>
                    <StyledTh>Email</StyledTh>
                </tr>
                {customers.map(customer => (
                    <tr key={customer.id}>
                        <StyledTd>{customer.id}</StyledTd>
                        <StyledTd>{customer.contactName}</StyledTd>
                        <StyledTd>{customer.phone1}</StyledTd>
                        <StyledTd>{customer.phone2}</StyledTd>
                        <StyledTd>{customer.email}</StyledTd>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

export default CustomersTable