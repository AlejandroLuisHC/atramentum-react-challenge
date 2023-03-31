import { FC } from 'react';
import {
    StyledTable,
    StyledTd,
    StyledTh,
    StyledTr,
    StyledTableWrapper
} from '../../style/components/dashboard';
import { ICustomersTableProp } from '../../helper/interfaces/dashboard';
import { useNavigate } from 'react-router-dom';

const CustomersTable: FC<ICustomersTableProp> = ({ customers }) => {
    const navigate = useNavigate();

    return (
        <StyledTableWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>ID</StyledTh>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Phone 1</StyledTh>
                        <StyledTh>Phone 2</StyledTh>
                        <StyledTh>Email</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <StyledTr key={customer.id} onClick={() => navigate(`customer/${customer.id}`)}>
                            <StyledTd>{customer.id}</StyledTd>
                            <StyledTd>{customer.contactName}</StyledTd>
                            <StyledTd>{customer.phone1}</StyledTd>
                            <StyledTd>{customer.phone2}</StyledTd>
                            <StyledTd>{customer.email}</StyledTd>
                        </StyledTr>
                    ))}
                </tbody>
            </StyledTable>
        </StyledTableWrapper>
    );
};

export default CustomersTable;