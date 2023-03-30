import styled from 'styled-components'
import { device } from '../../style_constants'

export const Main = styled.main`
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    flex: 1;

    @media ${device.desktop} {
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding: 2rem;
    }
`
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`