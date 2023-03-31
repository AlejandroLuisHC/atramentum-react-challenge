import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ICustomerWebsInfoProp } from "../../helper/interfaces/customer_data";
import {
    CustomerDataWrapper,
    CustomerDetail,
    CustomerInfoDiv,
    CustomerName,
    DetailTitle,
    DetailValue
} from "../../style/components/customer_data";
import { formatDate } from "../../helper/utils";
import { RootState } from "../../redux/store";
import { fetchCustomerWebs } from "../../redux/features/api_data/apiSlice";

const CustomerWebsInfo: FC<ICustomerWebsInfoProp> = ({ id }) => {
    const dispatch = useDispatch();
    const webs = useSelector((state: RootState) => state.api.CustomerWebs);
    console.log(">>>>>", webs)
    useEffect(() => {
        dispatch(fetchCustomerWebs({ customerId: id }));
    }, [dispatch, id]);

    return (
        <CustomerDataWrapper>
            <CustomerInfoDiv>
                <CustomerName>Webs</CustomerName>
                {
                    webs.map((web, index) => {
                        return (
                            <CustomerDetail key={web.id}>
                                <DetailTitle>Web {index + 1}</DetailTitle>
                                <DetailValue>URL: <b>{web.url}</b></DetailValue>
                                <DetailValue>Last update: <b>{formatDate(web.lastModifiedDate)}</b></DetailValue>
                            </CustomerDetail>
                        )
                    })
                }
            </CustomerInfoDiv>
        </CustomerDataWrapper>
    )
}

export default CustomerWebsInfo;
