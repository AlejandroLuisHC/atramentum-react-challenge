import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import {
    DashboardRowsPerPageLabel,
    DashboardRowsPerPageOption,
    DashboardRowsPerPageSelect,
    DashboardRowsPerPageWrapper
} from '../../style/components/dashboard/rowsPage'
import { RootState } from '../../redux/store';

const RowsPage: FC<{setRowsPerPage: Function}> = ({setRowsPerPage}) => {
    const { rows } = useSelector((state: RootState) => state.page);

    return (
        <DashboardRowsPerPageWrapper>
            <DashboardRowsPerPageLabel htmlFor="rowsPerPage">Rows per page: {rows}</DashboardRowsPerPageLabel>
            <DashboardRowsPerPageSelect name="rowsPerPage" id="rowsPerPage"
                onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
            >
                <DashboardRowsPerPageOption>Change</DashboardRowsPerPageOption>
                {rows !== 5 && <DashboardRowsPerPageOption value="5">5</DashboardRowsPerPageOption>}
                {rows !== 10 && <DashboardRowsPerPageOption value="10">10</DashboardRowsPerPageOption>}
                {rows !== 20 && <DashboardRowsPerPageOption value="20">20</DashboardRowsPerPageOption>}
                {rows !== 40 && <DashboardRowsPerPageOption value="40">40</DashboardRowsPerPageOption>}
            </DashboardRowsPerPageSelect>
        </DashboardRowsPerPageWrapper>
    )
}

export default memo(RowsPage);