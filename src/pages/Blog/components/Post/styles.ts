import styled from "styled-components";

export const PostContainer = styled.div`
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: ${props => props.theme["base-post"]};
    padding: 2rem;
    border-radius: 6px;
    min-height: 7rem;
    max-width: 25rem;
    min-width: 25rem;
    header{
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        
        .title{
            font-size: 20px;
            font-weight: bold;
            color: ${props => props.theme["base-title"]};

        }

        .date{
            font-size: 14px;
            color: ${props => props.theme["base-span"]};
        }

        
    }

    main{
        max-height: 60px;            /* Define a altura máxima */
        overflow: hidden;            /* Esconde o conteúdo que ultrapassa a altura */
        display: -webkit-box;        /* Usa o modelo de caixa flexível WebKit */
        -webkit-line-clamp: 3;       /* Limita o texto a 3 linhas */
        -webkit-box-orient: vertical;/* Define a orientação da caixa como vertical */
            span{
                font-size: 16px;
                color: ${props => props.theme["base-text"]};
            }
        }
`