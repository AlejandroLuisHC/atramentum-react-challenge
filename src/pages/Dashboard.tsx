import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchCustomers } from '../redux/features/api_data/apiSlice';
import Spinner from '../components/general_components/Spinner';
import CustomersTable from '../components/dashboard/CustomersTable';

const Dashboard = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state: RootState) => state.api.Customers);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchCustomers()).then(() => setIsLoading(false));
    }, [dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <CustomersTable
            customers={customers}
        />
    );
};

export default Dashboard;