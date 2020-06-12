import styled, { css } from 'styled-components'

export const ContainerList = styled.div`
    max-height: 350px;
    overflow-y: auto;
    position: relative;
`

export const SectionList = styled.div`
    padding: 10px;
`

export const ListHeader = styled.div`
    padding: 20px 0;
    background-color: ${props => props.theme.bgcolorHeader};
    border-radius: 6px;
    text-align: center;
    color: ${props => props.theme.color};
`

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 30px 60px 1fr;
    align-items: center;
    align-content: center;
    cursor: pointer;
    max-height: 250px;
    overflow-y: auto;
    background-color: ${props => props.theme.bgcolorItem};
    color: ${props => props.theme.color};

    ${({active}) => active && css`
        background-color: ${props => props.theme.bgcolorItemActive};
        border: ${props => (props.active ? "2px dotted #696969" : "none")};
        border-radius: 6px;
    `}
`

export const ListItem = styled.li`
    margin-bottom: 10px;
    margin-top: 10px;

    &:nth-child(1){
        padding: 0 10px;
    }

    &:nth-child(2){
        border-right: ${props => props.theme.borderRight};
        padding-right: 15px;
    }

    &:nth-child(3){
        padding-left: 15px;
    }
`

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    border-radius: 50%;
    outline: none;
    border: none;
    background: transparent;
    color: ${props => props.mode ? 'yellow' : '#4287f5'};
    padding: 5px;

    ${({left}) => left && css`
        left: 5px;
        display: ${props => props.currentItems === 1 ? 'none' : 'block'};
    `}

    ${({right}) => right && css`
        right: 5px;
        display: ${props => props.totalPages <= props.currentItems ? 'none' : 'block'};
    `}
`