import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomersTable from '../components/dashboard/CustomersTable';
import { fetchCustomers } from '../redux/features/api_data/apiSlice';
import { RootState } from '../redux/store';
import Spinner from '../components/general_components/Spinner';
import { 
    DashboardButton, 
    DashboardContainer, 
    DashboardPageSelector, 
    DashboardPaginationContainer, 
    DashboardPaginationText, 
    DashboardRowsPerPageLabel, 
    DashboardRowsPerPageOption, 
    DashboardRowsPerPageSelect, 
    DashboardRowsPerPageWrapper, 
    DashboardTitle 
} from '../style/components/dashboard';
import { setPage, setRows } from '../redux/features/pagination/pageSlice';

const Dashboard: FC = () => {
    const { rows } = useSelector((state: RootState) => state.page);
    const { Customers, totalPages, isLoading, error } = useSelector(
        (state: RootState) => state.api
    );

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(rows);
    const [pageInput, setPageInput] = useState<number>(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRows(rowsPerPage))
        dispatch(setPage(pageNumber))
        dispatch(fetchCustomers({ pageNumber, rows: rowsPerPage }));
    }, [dispatch, pageNumber, rowsPerPage]);

    const handlePrevPage = () => {
        if (pageNumber > 0) {
            setPageNumber(prev => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (pageNumber < totalPages) {
            setPageNumber(prev => prev + 1);
        }
    };

    const handleGoToPage = () => {
        if (pageInput >= 1 && pageInput <= totalPages) {
            setPageNumber(pageInput - 1);
        }
    };

    const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPageInput(parseInt(e.target.value));
    };
    
    return (
        <DashboardContainer>
            <DashboardTitle>Customers Dashboard</DashboardTitle>
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <CustomersTable customers={Customers} />
                    
                    <DashboardRowsPerPageWrapper>
                        <DashboardRowsPerPageLabel htmlFor="rowsPerPage">Rows per page: {rows}</DashboardRowsPerPageLabel>
                        <DashboardRowsPerPageSelect name="rowsPerPage" id="rowsPerPage"
                            onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                        >
                            <DashboardRowsPerPageOption>Change</DashboardRowsPerPageOption>
                            <DashboardRowsPerPageOption value="5">5</DashboardRowsPerPageOption>
                            <DashboardRowsPerPageOption value="10">10</DashboardRowsPerPageOption>
                            <DashboardRowsPerPageOption value="20">20</DashboardRowsPerPageOption>
                            <DashboardRowsPerPageOption value="40">40</DashboardRowsPerPageOption>
                        </DashboardRowsPerPageSelect>
                    </DashboardRowsPerPageWrapper>

                    <DashboardPaginationContainer>
                        <DashboardPaginationText>
                            Page {pageNumber + 1} of {totalPages}
                        </DashboardPaginationText>
                        <DashboardButton onClick={handlePrevPage} disabled={pageNumber === 0}>
                            Prev
                        </DashboardButton>
                        <DashboardButton onClick={handleNextPage} disabled={pageNumber === totalPages - 1}>
                            Next
                        </DashboardButton>
                        <DashboardPageSelector type="number" min={1} max={totalPages} placeholder={`${pageNumber + 1}`} onChange={handlePageInputChange} />
                        <DashboardButton onClick={handleGoToPage}>Go</DashboardButton>
                    </DashboardPaginationContainer>
                </>
            )}
        </DashboardContainer>
    );
};

export default Dashboard;
