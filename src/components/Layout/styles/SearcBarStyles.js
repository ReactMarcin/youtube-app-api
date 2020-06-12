import styled from 'styled-components'

export const SearchBarSegment = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.bgcolorHeader};
    border-radius: 3px;
    display: flex;
    align-items: center;
`

export const FormContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 500px;
    padding: 0 20px;
    width: 100% !important;
    transform: translate(-50%, -50%);
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    outline: none;
    border: ${props => props.theme.inputBorder};
    background-color: ${props => props.theme.bgcolorItem};
    border-radius: 10px;
    color: ${props => props.theme.color};
`