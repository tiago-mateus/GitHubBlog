import styled from "styled-components";
export const BlogContainer = styled.div`
    width: 100%;

`
export const LinksContainers = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`
export const PostContentContainer = styled.div`
    background-color: ${props => props.theme["base-profile"]};
    height: 10rem;
    border-radius: 10px;
    transform: translateY(-7rem);
    display: flex;
    align-items: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .Links{
        display: flex;
        gap: 0.5rem;
        align-self: flex-start;
        font-weight: bold;
        color: ${props => props.theme["blue"]};
        text-decoration: none;
        
        &:hover{
            text-decoration: underline;
        }
    }

    img{
        border-radius: 8px;
    }

   
`
export const DetailsContent = styled.div`
        display: flex;
        flex-direction: column;
        padding: 2rem;
        width: 100%;
        .title{
            font-size: 24px;
            font-weight: bold;
        }
       
`
export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 1.5rem;

    span{
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
    }
`

