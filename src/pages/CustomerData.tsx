import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ICustomer } from '../helper/interfaces/api';
import Spinner from '../components/general_components/Spinner';
import CustomerForm from '../components/customer_data/CustomerForm';

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
        <CustomerForm
            customer={customer}
        />
    );
};

export default CustomerData;