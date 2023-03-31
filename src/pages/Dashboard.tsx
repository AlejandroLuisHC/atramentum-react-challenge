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
    DashboardTitle 
} from '../style/components/dashboard';

const Dashboard: FC = () => {
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageInput, setPageInput] = useState<number>(0);
    const { Customers, totalPages, isLoading, error } = useSelector(
        (state: RootState) => state.api
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCustomers({ pageNumber }));
    }, [dispatch, pageNumber]);

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
