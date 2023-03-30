import { DivSpinner } from '../../style/components/general_components'
import { memo } from 'react'
import { BiLoaderAlt } from '@react-icons/all-files/bi/BiLoaderAlt'

const Spinner = () => {
    return (
        <DivSpinner><BiLoaderAlt /></DivSpinner>
    )
}

export default memo(Spinner)