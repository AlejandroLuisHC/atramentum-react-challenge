import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ICustomerWebsInfoProp } from "../../helper/interfaces/customer_data";
import {
    CustomerDataWrapper,
    CustomerDetail,
    CustomerInfoDiv,
    CustomerName,
    DetailInput,
    DetailLabel,
    DetailText,
    DetailValueError
} from "../../style/components/customer_data";
import { formatDate } from "../../helper/utils";
import { RootState } from "../../redux/store";
import { fetchCustomerWebs } from "../../redux/features/api_data/apiSlice";
import Spinner from "../general_components/Spinner";

const CustomerWebsInfo: FC<ICustomerWebsInfoProp> = ({ id }) => {
    const dispatch = useDispatch();
    const { CustomerWebs: webs, isLoading } = useSelector((state: RootState) => state.api);

    useEffect(() => {
        dispatch(fetchCustomerWebs({ customerId: id }));
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <CustomerDataWrapper>
            <CustomerInfoDiv>
                <CustomerName>Customer's webs</CustomerName>
                {webs.length > 0 ?
                    webs.map((web, index) => {
                        return (
                            <CustomerDetail key={web.id}>
                                <DetailLabel>Web #{index + 1}:</DetailLabel>
                                <DetailInput 
                                    type='text'
                                    value={web.url}
                                />                           
                                <DetailText>
                                    Last modified: {formatDate(web.lastModifiedDate)}
                                </DetailText>
                            </CustomerDetail>
                        )
                    })
                    : <DetailValueError>No webs found for this customer</DetailValueError>                }
            </CustomerInfoDiv>
        </CustomerDataWrapper>
    )
}

export default CustomerWebsInfo;