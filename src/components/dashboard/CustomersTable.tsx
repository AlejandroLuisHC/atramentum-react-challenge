import { FC, useEffect, useState } from 'react';
import {
    StyledTable,
    StyledTd,
    StyledTh,
    StyledTr,
    StyledTableWrapper
} from '../../style/components/dashboard';
import { ICustomersTableProp, IItemsTable } from '../../helper/interfaces/dashboard';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../helper/utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setItems } from '../../redux/features/table/pageSlice';
import ItemsSelector from './ItemsSelector';

const CustomersTable: FC<ICustomersTableProp> = ({ customers }) => {
    const navigate = useNavigate();
    const { items } = useSelector((state: RootState) => state.page);
    const dispatch = useDispatch();

    const [itemsToDisplay, setItemsToDisplay] = useState<IItemsTable>(items);

    useEffect(() => {
        dispatch(setItems(itemsToDisplay));
    }, [itemsToDisplay]);

    return (
        <>
            <ItemsSelector 
                itemsToDisplay={itemsToDisplay}
                setItemsToDisplay={setItemsToDisplay}
            />
            <StyledTableWrapper>
                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTh>ID</StyledTh>
                            {itemsToDisplay.contactName &&
                                <StyledTh>Name</StyledTh>}
                            {itemsToDisplay.phone1 &&
                                <StyledTh>Phone 1</StyledTh>}
                            {itemsToDisplay.phone2 &&
                                <StyledTh>Phone 2</StyledTh>}
                            {itemsToDisplay.email &&
                                <StyledTh>Email</StyledTh>}
                            {itemsToDisplay.createdDate &&
                                <StyledTh>Created</StyledTh>}
                            {itemsToDisplay.sectorId &&
                                <StyledTh>Sector ID</StyledTh>}
                            {itemsToDisplay.customerCategoryId &&
                                <StyledTh>Category ID</StyledTh>}
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <StyledTr key={customer.id} onClick={() => navigate(`customer/${customer.id}`)}>
                                <StyledTd>{customer.id}</StyledTd>
                                {itemsToDisplay.contactName &&
                                    <StyledTd>{customer.contactName}</StyledTd>}
                                {itemsToDisplay.phone1 &&
                                    <StyledTd>{customer.phone1}</StyledTd>}
                                {itemsToDisplay.phone2 &&
                                    <StyledTd>{customer.phone2}</StyledTd>}
                                {itemsToDisplay.email &&
                                    <StyledTd>{customer.email}</StyledTd>}
                                {itemsToDisplay.createdDate &&
                                    <StyledTd>{formatDate(customer.createdDate)}</StyledTd>}
                                {itemsToDisplay.sectorId &&
                                    <StyledTd>{customer.sectorId}</StyledTd>}
                                {itemsToDisplay.customerCategoryId &&
                                    <StyledTd>{customer.customerCategoryId}</StyledTd>}
                            </StyledTr>
                        ))}
                    </tbody>
                </StyledTable>
            </StyledTableWrapper>
        </>
    );
};

export default CustomersTable;