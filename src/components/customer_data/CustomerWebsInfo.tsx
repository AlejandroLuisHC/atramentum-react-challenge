import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ICustomerWebsInfoProp } from "../../helper/interfaces/customer_data";
import {
    ButtonEdit,
    ButtonSave,
    CustomerDataWrapper,
    CustomerDetail,
    CustomerInfoDiv,
    CustomerInfoForm,
    CustomerName,
    DetailInput,
    DetailLabel,
    DetailText,
    DetailValueError
} from "../../style/components/customer_data";
import { formatDate } from "../../helper/utils";
import { RootState } from "../../redux/store";
import { editWeb, fetchCustomerWebs } from "../../redux/features/api_data/apiSlice";
import Spinner from "../general_components/Spinner";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiOutlineEdit } from "@react-icons/all-files/ai/AiOutlineEdit";

const CustomerWebsInfo: FC<ICustomerWebsInfoProp> = ({ id }) => {
    const dispatch = useDispatch();
    const { CustomerWebs: webs, isLoading } = useSelector((state: RootState) => state.api);

    useEffect(() => {
        dispatch(fetchCustomerWebs({ customerId: id }));
    }, [dispatch, id]);

    const [isEditing, setIsEditing] = useState(false);

    const {
        register,
        handleSubmit,
    } = useForm();

    return (
        isLoading
            ?
            <Spinner />
            :
            <CustomerDataWrapper>
                <CustomerInfoDiv>
                    <CustomerName>Customer's webs</CustomerName>
                    {webs.length > 0 && 
                        <ButtonEdit type="button" isEdit={isEditing} onClick={() => setIsEditing(prev => prev = !prev)}>
                            {
                                isEditing ? <AiOutlineClose /> : <AiOutlineEdit />
                            }
                        </ButtonEdit>
                    }
                    {webs.length > 0 ?
                        webs.map((web, index) => {
                            return (
                                <CustomerInfoForm key={web.id}
                                    onSubmit={handleSubmit(data => {
                                        const updatedWeb = {
                                            ...web,
                                            url: data[`url${web.id}`],
                                        }
                                        dispatch(editWeb({ id: web.id, data: updatedWeb }));
                                        setIsEditing(prev => prev = false);
                                    })}
                                >
                                    <CustomerDetail>
                                        <DetailLabel>Web #{index + 1}:</DetailLabel>
                                        <DetailInput
                                            type="text"
                                            defaultValue={web.url}
                                            disabled={!isEditing}
                                            {
                                                ...register(`url${web.id}`, {
                                                    required: false,
                                                    maxLength: {
                                                        value: 100,
                                                        message: "Max length is 100 characters"
                                                    }
                                                })
                                            }
                                        />
                                        <DetailText>
                                            Last modified: {formatDate(web.lastModifiedDate)}
                                        </DetailText>
                                    </CustomerDetail>
                                    {isEditing && <ButtonSave type="submit">Save</ButtonSave>}
                                </CustomerInfoForm>
                            )
                        })
                        : <DetailValueError>No webs found for this customer</DetailValueError>}
                </CustomerInfoDiv>
            </CustomerDataWrapper>
    )
}

export default CustomerWebsInfo;