import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomersTable from '../components/dashboard/CustomersTable';
import { fetchCustomers } from '../redux/features/api_data/apiSlice';
import { RootState } from '../redux/store';
import Spinner from '../components/general_components/Spinner';
import {
    DashboardContainer,
    DashboardTitle
} from '../style/components/dashboard';
import { setPage, setRows } from '../redux/features/table/pageSlice';
import RowsPage from '../components/dashboard/RowsPage';
import Pagination from '../components/dashboard/Pagination';
import { DetailValueError } from '../style/components/customer_data';

const Dashboard: FC = () => {
    const { rows } = useSelector((state: RootState) => state.page);
    const { Customers, totalPages, isLoading, error } = useSelector(
        (state: RootState) => state.api
    );
    console.log(rows)
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(rows);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRows(rowsPerPage))
        dispatch(setPage(pageNumber))
        dispatch(fetchCustomers({ pageNumber, rows: rowsPerPage }));
    }, [dispatch, pageNumber, rowsPerPage]);

    return (
        <DashboardContainer>
            <DashboardTitle>Customers Dashboard</DashboardTitle>
            {isLoading ?
                <Spinner />
                : error ?
                    <DetailValueError>{error}</DetailValueError>
                    :
                    <>
                        <CustomersTable customers={Customers} />

                        <RowsPage
                            setRowsPerPage={setRowsPerPage}
                        />

                        <Pagination
                            totalPages={totalPages}
                            pageNumber={pageNumber}
                            setPageNumber={setPageNumber}
                        />
                    </>
            }
        </DashboardContainer>
    );
};

export default Dashboard;