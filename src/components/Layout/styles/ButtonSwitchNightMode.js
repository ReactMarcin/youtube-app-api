import styled from 'styled-components'

export const ButtonTheme = styled.button`
    padding: 4px;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: ${props => props.theme.bgcolorItem};
    display: flex;
    justify-content: center;
    align-items: center;
    right: 10px;
    position: absolute;
`

export const Icon = styled.i`
    color: ${props => props.theme.color};
`