import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    input{
        background-color: ${props => props.theme["base-input"]};
        height: 3.125rem;
        border-radius: 8px;
        border: 0;
        margin-top: 0.725rem;
        padding: 0 0.725rem;
    }
`