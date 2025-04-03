import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
    background-color: #fcfcfc;
    box-shadow: 0px 4px 4px rgba(0 , 0, 0, 0.25);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;
`

export const TituloETag_D_flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
`

export const TagFavorito = styled.span`
    padding: 8px 14px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    background-color: #28a745;
    border-radius: 8px;
    margin-right: 48px;
`

export const TagNaoFavorito = styled.span`
    padding: 8px 14px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    background-color: ${variaveis.amarelo};
    border-radius: 8px;
    margin-right: 48px;
`

export const Email = styled.input`
    margin-top: 16px;
    display: block;
    width: 100%;
    border: none;
    padding: 4px;
    background-color: #fcfcfc;
    cursor: pointer;
    margin-bottom: 2px;
    color: #8b8b8b;
    font-family: 'Roboto Mono', monospace;
    line-height: 24px;
    font-weight: bold;
`
export const NumeroTelefone = styled.input`
    width: 100%;
    border: none;
    padding: 4px;
    background-color: #fcfcfc;
    cursor: pointer;
    color: #8b8b8b;
    font-family: 'Roboto Mono', monospace;
    line-height: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const BarraAcoes = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 16px;
`

export const Botoes = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #2f3640;
    border-radius: 8px;
    margin-right: 8px;
`

export const BotaoSalvar = styled(Botoes)`
    background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botoes)`
    background-color: ${variaveis.vermelho};
`