import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
    grid-auto-rows: min-content;
    align-items: center;
    background-color: ${props => props.theme.bgcolor};

    @media (min-width: 529px) {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    }
`