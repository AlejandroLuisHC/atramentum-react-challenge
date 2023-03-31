import { FC, useState } from "react";
import { ICustomerInfoProp } from "../../helper/interfaces/customer_data";
import {
    ButtonEdit,
    ButtonSave,
    CustomerDataWrapper,
    CustomerDetail,
    CustomerInfoForm,
    CustomerName,
    DetailInput,
    DetailLabel,
    DetailOption,
    DetailSelect,
    DetailText,
    DetailTextarea,
    DetailTitle,
} from "../../style/components/customer_data";
import { formatDate } from "../../helper/utils";
import { useForm } from "react-hook-form";
import { ICustomerEdit } from "../../helper/interfaces/api";
import { AiOutlineEdit } from "@react-icons/all-files/ai/AiOutlineEdit";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { useDispatch } from "react-redux";
import { editCustomer } from "../../redux/features/api_data/apiSlice";


const CustomerInfo: FC<ICustomerInfoProp> = ({ customer }) => {
    const {
        id,
        contactName,
        phone1,
        phone2,
        canContactPhone,
        email,
        canSendMail,
        agreeTerms,
        agreeCommercials,
        lastModifiedDate,
        observations
    } = customer;

    const dispatch = useDispatch();

    type Checks = {
        canContactPhone: boolean;
        canSendMail: boolean;
        agreeTerms: boolean;
        agreeCommercials: boolean;
    }
    const [checks, setChecks] = useState<Checks>({
        canContactPhone,
        canSendMail,
        agreeTerms,
        agreeCommercials
    });
    const [isEditing, setIsEditing] = useState(false);

    const { 
        register,
        handleSubmit,
    } = useForm();

    return (
        <CustomerDataWrapper>
            <CustomerInfoForm
                onSubmit={handleSubmit(data => {
                    const updatedData:ICustomerEdit = {
                        ...customer,
                        ...data,
                        ...checks
                    };

                    dispatch(editCustomer({ id, data: updatedData }));
                    setIsEditing(prev => prev = false);
                })}
            >
                <CustomerName>Customer's information</CustomerName>
                <ButtonEdit type="button" isEdit={isEditing} onClick={() => setIsEditing(prev => prev = !prev)}>
                    {
                        isEditing ? <AiOutlineClose /> : <AiOutlineEdit />
                    }
                </ButtonEdit>
                <CustomerDetail>
                    <DetailLabel htmlFor="contactName">Contact name:</DetailLabel>
                    <DetailInput
                        type="text"
                        defaultValue={contactName}
                        disabled={!isEditing}
                        {
                            ...register("contactName", {
                                required: false,
                                minLength: {
                                    value: 3,
                                    message: "Contact name must be at least 3 characters"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Contact name must be less than 50 characters"
                                }
                            })
                        }
                    />
                </CustomerDetail>
                <CustomerDetail>
                    <DetailLabel htmlFor="phone1">Phone 1:</DetailLabel>
                    <DetailInput
                        type="phone"
                        defaultValue={phone1}
                        disabled={!isEditing}
                        {
                            ...register("phone1", {
                                required: false,
                                minLength: {
                                    value: 3,
                                    message: "Phone 1 must be at least 3 characters"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Phone 1 must be less than 50 characters"
                                }
                            })
                        }
                    />
                </CustomerDetail>
                <CustomerDetail>
                    <DetailLabel htmlFor="phone2">Phone 2:</DetailLabel>
                    <DetailInput
                        type="phone"
                        defaultValue={phone2}
                        disabled={!isEditing}
                        {
                            ...register("phone2", {
                                required: false,
                                minLength: {
                                    value: 3,
                                    message: "Phone 2 must be at least 3 characters"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Phone 2 must be less than 50 characters"
                                }
                            })
                        }
                    />
                </CustomerDetail>
                <CustomerDetail>
                    <DetailLabel htmlFor="email">Email:</DetailLabel>
                    <DetailInput
                        type="email"
                        defaultValue={email}
                        disabled={!isEditing}
                        {
                            ...register("email", {
                                required: false,
                                minLength: {
                                    value: 3,
                                    message: "Email must be at least 3 characters"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Email must be less than 50 characters"
                                }
                            })
                        }
                    />
                </CustomerDetail>
                <CustomerDetail>
                    <DetailLabel htmlFor="canContactPhone">Can contact phone:</DetailLabel>
                    {
                        canContactPhone ?
                            <DetailSelect
                                name="canContactPhone"
                                disabled={!isEditing}
                                onChange={(e) => setChecks(prev => prev = { ...prev, canContactPhone: e.target.value === "true" ? true : false})}
                            >
                                <DetailOption value="true">Yes</DetailOption>
                                <DetailOption value="false">No</DetailOption>
                            </DetailSelect>
                            :
                            <DetailSelect
                                name="canContactPhone"
                                disabled={!isEditing}
                                onChange={(e) => setChecks(prev => prev = { ...prev, canContactPhone: e.target.value === "true" ? true : false})}
                            >
                                <DetailOption value="false">No</DetailOption>
                                <DetailOption value="true">Yes</DetailOption>
                            </DetailSelect>
                    }
                </CustomerDetail>
                <CustomerDetail>
                    <DetailLabel htmlFor="canSendMail">Can send mail:</DetailLabel>
                    {
                        canSendMail ?
                            <DetailSelect
                                name="canSendMail"
                                disabled={!isEditing}
                                onChange={(e) => setChecks(prev => prev = { ...prev, canSendMail: e.target.value === "true" ? true : false})}
                            >
                                <DetailOption value="true">Yes</DetailOption>
                                <DetailOption value="false">No</DetailOption>
                            </DetailSelect>
                            :
                            <DetailSelect
                                name="canSendMail"
                                disabled={!isEditing}
                                onChange={(e) => setChecks(prev => prev = { ...prev, canSendMail: e.target.value === "true" ? true : false})}
                            >
                                <DetailOption value="false">No</DetailOption>
                                <DetailOption value="true">Yes</DetailOption>
                            </DetailSelect>
                    }
                </CustomerDetail>
                <CustomerDetail>
                    <DetailLabel htmlFor="agreeTerms">Agree terms:</DetailLabel>
                    {
                        agreeTerms ?
                            <DetailSelect
                                name="agreeTerms"
                                disabled={!isEditing}
                                onChange={(e) => setChecks(prev => prev = { ...prev, agreeTerms: e.target.value === "true" ? true : false})}
                            >
                                <DetailOption value="true">Yes</DetailOption>
                                <DetailOption value="false">No</DetailOption>
                            </DetailSelect>
                            :
                            <DetailSelect
                                name="agreeTerms"
                                disabled={!isEditing}
                                onChange={(e) => setChecks(prev => prev = { ...prev, agreeTerms: e.target.value === "true" ? true : false})}
                            >
                                <DetailOption value="false">No</DetailOption>
                                <DetailOption value="true">Yes</DetailOption>
                            </DetailSelect>
                    }
                </CustomerDetail>
                <CustomerDetail>
                    <DetailLabel htmlFor="agreeCommercials">Agree commercials:</DetailLabel>
                    {
                        agreeCommercials ? 
                            <DetailSelect
                                name="agreeCommercials"
                                disabled={!isEditing}
                                onChange={(e) => setChecks(prev => prev = { ...prev, agreeCommercials: e.target.value === "true" ? true : false})}
                            >
                                <DetailOption value="true">Yes</DetailOption> 
                                <DetailOption value="false">No</DetailOption>
                            </DetailSelect>
                            : 
                            <DetailSelect
                                name="agreeCommercials"
                                disabled={!isEditing}
                                onChange={(e) => setChecks(prev => prev = { ...prev, agreeCommercials: e.target.value === "true" ? true : false})}
                            >
                                <DetailOption value="false">No</DetailOption>
                                <DetailOption value="true">Yes</DetailOption> 
                            </DetailSelect>
                    }
                </CustomerDetail>
                <CustomerDetail>
                    <DetailLabel htmlFor="observations">Observations:</DetailLabel>
                    <DetailTextarea
                        disabled={!isEditing}
                        defaultValue={observations}
                        {
                            ...register("observations", {
                                required: false,
                                minLength: {
                                    value: 3,
                                    message: "Observations must be at least 3 characters"
                                },
                                maxLength: {
                                    value: 500,
                                    message: "Observations must be less than 500 characters"
                                }
                            })
                        }
                    />
                </CustomerDetail>
                <CustomerDetail>
                    <DetailTitle>Last modified:</DetailTitle>
                    <DetailText>{formatDate(lastModifiedDate)}</DetailText>
                </CustomerDetail>
                {isEditing && <ButtonSave type="submit">Save</ButtonSave>}
            </CustomerInfoForm>
        </CustomerDataWrapper>
    )
}

export default CustomerInfo