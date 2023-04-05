import styled from 'styled-components'
import { device } from '../../style_constants'

export const Main = styled.main`
    flex: 1;
    padding: 1.5rem;

    @media ${device.mobile} {
        padding: 1rem;
    }
`
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`