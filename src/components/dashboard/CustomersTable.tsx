import { FC, useEffect, useState } from 'react';
import {
    StyledTable,
    StyledTd,
    StyledTh,
    StyledTr,
    StyledTableWrapper,
    StyledSortButton,
} from '../../style/components/dashboard/customersTable';
import { ICustomersTableProp, IItemsTable } from '../../helper/interfaces/dashboard';
import { useNavigate } from 'react-router-dom';
import { formatDate, orderItems } from '../../helper/utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setItems } from '../../redux/features/table/pageSlice';
import ItemsSelector from './ItemsSelector';
import { ImSortAmountAsc } from '@react-icons/all-files/im/ImSortAmountAsc'
import { ISortingView } from '../../helper/interfaces/customer_data';
const CustomersTable: FC<ICustomersTableProp> = ({ customers }) => {
    const customersProp = [...customers];
    const navigate = useNavigate();
    const { items } = useSelector((state: RootState) => state.page);
    const dispatch = useDispatch();

    const [itemsToDisplay, setItemsToDisplay] = useState<IItemsTable>(items);
    const [customersTable, setCustomersTable] = useState(customersProp);
    const sortButtonsBaseState = {
        id: false,
        contactName: false,
        phone1: false,
        phone2: false,
        email: false,
        createdDate: false,
        sectorId: false,
        customerCategoryId: false,
    }
    const [sortButtonView, setSortButtonView] = useState<ISortingView>({
        ...sortButtonsBaseState,
        id: true,
    });


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
                            <StyledTh>
                                ID
                                {!sortButtonView.id && <StyledSortButton onClick={() => {
                                    orderItems(customersProp, 'id', setCustomersTable)
                                    setSortButtonView(prev => ({...sortButtonsBaseState, id: true}))
                                }}>
                                    <ImSortAmountAsc />
                                </StyledSortButton>}
                            </StyledTh>
                            {itemsToDisplay.contactName && 
                                <StyledTh>
                                    Contact Name
                                    {!sortButtonView.contactName && <StyledSortButton onClick={() => {
                                        orderItems(customersProp, 'contactName', setCustomersTable)
                                        setSortButtonView(prev => ({...sortButtonsBaseState, contactName: true}))
                                    }}>
                                        <ImSortAmountAsc />
                                    </StyledSortButton>}
                                </StyledTh>}
                            {itemsToDisplay.phone1 &&
                                <StyledTh>
                                    Phone 1
                                    {!sortButtonView.phone1 && <StyledSortButton onClick={() => {
                                        orderItems(customersProp, 'phone1', setCustomersTable)
                                        setSortButtonView(prev => ({...sortButtonsBaseState, phone1: true}))
                                    }}>
                                        <ImSortAmountAsc />
                                    </StyledSortButton>}
                                </StyledTh>}
                            {itemsToDisplay.phone2 &&
                                <StyledTh>
                                    Phone 2
                                    {!sortButtonView.phone2 && <StyledSortButton onClick={() => {
                                        orderItems(customersProp, 'phone2', setCustomersTable)
                                        setSortButtonView(prev => ({...sortButtonsBaseState, phone2: true}))
                                    }}>
                                        <ImSortAmountAsc />
                                    </StyledSortButton>}
                                </StyledTh>}
                            {itemsToDisplay.email &&
                                <StyledTh>
                                    Email
                                    {!sortButtonView.email && <StyledSortButton onClick={() => {
                                        orderItems(customersProp, 'email', setCustomersTable)
                                        setSortButtonView(prev => ({...sortButtonsBaseState, email: true}))
                                    }}>
                                        <ImSortAmountAsc />
                                    </StyledSortButton>}
                                </StyledTh>}
                            {itemsToDisplay.createdDate &&
                                <StyledTh>
                                    Created Date
                                    {!sortButtonView.createdDate && <StyledSortButton onClick={() => {
                                        orderItems(customersProp, 'createdDate', setCustomersTable)
                                        setSortButtonView(prev => ({...sortButtonsBaseState, createdDate: true}))
                                    }}>
                                        <ImSortAmountAsc />
                                    </StyledSortButton>}
                                </StyledTh>}
                            {itemsToDisplay.sectorId &&
                                <StyledTh>
                                    Sector ID
                                    {!sortButtonView.sectorId && <StyledSortButton onClick={() => {
                                        orderItems(customersProp, 'sectorId', setCustomersTable)
                                        setSortButtonView(prev => ({...sortButtonsBaseState, sectorId: true}))
                                    }}>
                                        <ImSortAmountAsc />
                                    </StyledSortButton>}
                                </StyledTh>}
                            {itemsToDisplay.customerCategoryId &&
                                <StyledTh>
                                    Customer Category ID
                                    {!sortButtonView.customerCategoryId && <StyledSortButton onClick={() => {
                                        orderItems(customersProp, 'customerCategoryId', setCustomersTable)
                                        setSortButtonView(prev => ({...sortButtonsBaseState, customerCategoryId: true}))
                                    }}>
                                        <ImSortAmountAsc />
                                    </StyledSortButton>}
                                </StyledTh>}
                        </tr>
                    </thead>
                    <tbody>
                        {customersTable.map((customer) => (
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