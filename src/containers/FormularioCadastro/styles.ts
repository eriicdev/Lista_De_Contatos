import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Form = styled.form`
    max-width: 547px;
    width: 100%;

`

export const CampoFavorito = styled.input`
    margin-right: 8px;
    margin-top: 18px;
`

export const Label = styled.label`
    font-family: 'Roboto Mono', monospace;
    color:rgb(106, 106, 107);
`

export const BotaoCadastrar = styled.button`
    background-color: ${variaveis.verde};
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    margin-right: 8px;
    display: block;
    margin-top: 24px;
`