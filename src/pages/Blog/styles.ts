import styled from "styled-components";
export const BlogContainer = styled.div`
    width: 100%;

`
export const ProfileContainer = styled.div`
    background-color: ${props => props.theme["base-profile"]};
    height: 10rem;
    border-radius: 10px;
    transform: translateY(-7rem);
    display: flex;
    align-items: center;
    padding: 2rem;
    display: grid;
    grid-template-columns: 8.5rem 1fr 5rem;

    .LinkGitHub{
        display: flex;
        gap: 0.5rem;
        align-self: flex-start;
        font-weight: bold;
        color: white;
        text-decoration: none;
        
        &:hover{
        text-decoration: underline;

        }
    }

    img{
        border-radius: 8px;
    }

   
`
export const ProfileInfo = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: start;
        padding: 2rem;
        width: inherit;
        .name{
            font-size: 24px;
            color: ${props => props.theme["base-title"]};
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .bio{
            font-size: 16px;
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

export const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

export const SearchContainer = styled.div`
    margin-bottom: 3rem;
`