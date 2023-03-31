import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ICustomer } from '../helper/interfaces/api';
import Spinner from '../components/general_components/Spinner';
import CustomerInfo from '../components/customer_data/CustomerInfo';
import CustomerWebsInfo from '../components/customer_data/CustomerWebsInfo';
import { CustomerId } from '../style/components/customer_data';

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
            <Link to="/">Back to dashboard</Link>
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