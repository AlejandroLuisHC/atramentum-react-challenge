import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ICustomer } from '../helper/interfaces/api';
import Spinner from '../components/general_components/Spinner';
import CustomerInfo from '../components/customer_data/CustomerInfo';
import CustomerWebsInfo from '../components/customer_data/CustomerWebsInfo';
import { BackDashboard, CustomerId } from '../style/components/customer_data';

const CustomerData = () => {
    const { id } = useParams<{ id: string }>();
    const customers = useSelector((state: RootState) => state.api.Customers);
    const customer: ICustomer | undefined = customers.find(
        (customer) => id && customer.id === Number(id)
    );

    if (!customer) {
        return <Spinner />;
    }

    return (
        <>
            <BackDashboard to="/">Back to dashboard</BackDashboard>
            <CustomerId>Customer #{id}</CustomerId>
            <CustomerInfo
                customer={customer}
            />
            <CustomerWebsInfo
                id={Number(id)}
            />
        </>
    );
};

export default CustomerData;