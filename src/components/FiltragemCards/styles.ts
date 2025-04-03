import styled from "styled-components";

type Props = {
    ativo: boolean
}

export const Card = styled.div<Props>`
    padding: 8px;
    border: 1px solid ${(props) => (props.ativo ? '#1e98ff' : '#a1a1a1')};
    background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
    color: ${(props) => (props.ativo ? '#1e98ff' : '#5e5e5e')}; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 8px;
    margin-top: 16px;
    border-radius: 8px;
    cursor: pointer;
`

export const Contador = styled.span`
    font-weight: bold;
    font-size: 24px;
    display: block;
`
export const Label = styled.span`
    font-size: 18px;
`