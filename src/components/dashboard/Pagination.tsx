import { FC, useState, memo } from 'react'
import { 
    DashboardButton, 
    DashboardPageSelector, 
    DashboardPaginationContainer, 
    DashboardPaginationText 
} from '../../style/components/dashboard/pagination'

const Pagination: FC<{ totalPages: number, pageNumber: number, setPageNumber: Function}> = ({ totalPages, pageNumber, setPageNumber })  => {
    const [pageInput, setPageInput] = useState<number>(0);

    const handlePrevPage = () => {
        if (pageNumber > 0) {
            setPageNumber((prev: number) => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (pageNumber < totalPages) {
            setPageNumber((prev: number) => prev + 1);
        }
    };

    const handleGoToPage = () => {
        if (pageInput >= 1 && pageInput <= totalPages) {
            setPageNumber(pageInput - 1);
        }
    };

    const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPageInput(parseInt(e.target.value));
    };

    return (
        <DashboardPaginationContainer>
            <DashboardPaginationText>
                Page {pageNumber + 1} of {totalPages}
            </DashboardPaginationText>
            <DashboardButton onClick={handlePrevPage} disabled={pageNumber === 0}>
                Prev
            </DashboardButton>
            <DashboardButton onClick={handleNextPage} disabled={pageNumber === totalPages - 1}>
                Next
            </DashboardButton>
            <DashboardPageSelector type="number" min={1} max={totalPages} placeholder={`${pageNumber + 1}`} onChange={handlePageInputChange} />
            <DashboardButton onClick={handleGoToPage}>Go</DashboardButton>
        </DashboardPaginationContainer>
    )
}

export default memo(Pagination)