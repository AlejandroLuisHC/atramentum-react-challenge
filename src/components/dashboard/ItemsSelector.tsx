import { FC } from 'react'
import { IItemsTable } from '../../helper/interfaces/dashboard'
import { ItemsSelectorInput, ItemsSelectorLabel, ItemsSelectorTitle, ItemsSelectorWrapper } from '../../style/components/dashboard'

const ItemsSelector: FC<{itemsToDisplay: IItemsTable, setItemsToDisplay: Function}> = ({itemsToDisplay, setItemsToDisplay}) => {
    return (
        <ItemsSelectorWrapper>
            <ItemsSelectorTitle>Columns to display:</ItemsSelectorTitle>
            <ItemsSelectorLabel>
                <ItemsSelectorInput
                    type="checkbox"
                    checked={itemsToDisplay.contactName}
                    onChange={() => setItemsToDisplay({ ...itemsToDisplay, contactName: !itemsToDisplay.contactName })}
                />
                Name
            </ItemsSelectorLabel>
            <ItemsSelectorLabel>
                <ItemsSelectorInput
                    type="checkbox"
                    checked={itemsToDisplay.phone1}
                    onChange={() => setItemsToDisplay({ ...itemsToDisplay, phone1: !itemsToDisplay.phone1 })}
                />
                Phone 1
            </ItemsSelectorLabel>
            <ItemsSelectorLabel>
                <ItemsSelectorInput
                    type="checkbox"
                    checked={itemsToDisplay.phone2}
                    onChange={() => setItemsToDisplay({ ...itemsToDisplay, phone2: !itemsToDisplay.phone2 })}
                />
                Phone 2
            </ItemsSelectorLabel>
            <ItemsSelectorLabel>
                <ItemsSelectorInput
                    type="checkbox"
                    checked={itemsToDisplay.email}
                    onChange={() => setItemsToDisplay({ ...itemsToDisplay, email: !itemsToDisplay.email })}
                />
                Email
            </ItemsSelectorLabel>
            <ItemsSelectorLabel>
                <ItemsSelectorInput
                    type="checkbox"
                    checked={itemsToDisplay.createdDate}
                    onChange={() => setItemsToDisplay({ ...itemsToDisplay, createdDate: !itemsToDisplay.createdDate })}
                />
                Created
            </ItemsSelectorLabel>
            <ItemsSelectorLabel>
                <ItemsSelectorInput
                    type="checkbox"
                    checked={itemsToDisplay.sectorId}
                    onChange={() => setItemsToDisplay({ ...itemsToDisplay, sectorId: !itemsToDisplay.sectorId })}
                />
                Sector ID
            </ItemsSelectorLabel>
            <ItemsSelectorLabel>
                <ItemsSelectorInput
                    type="checkbox"
                    checked={itemsToDisplay.customerCategoryId}
                    onChange={() => setItemsToDisplay({ ...itemsToDisplay, customerCategoryId: !itemsToDisplay.customerCategoryId })}
                />
                Category ID
            </ItemsSelectorLabel>
        </ItemsSelectorWrapper>
    )
}

export default ItemsSelector