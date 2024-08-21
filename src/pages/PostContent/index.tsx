import { ArrowSquareOut, Building, CaretLeft, GithubLogo, Users } from "@phosphor-icons/react";
import { DetailsContent, LinksContainers, PostContentContainer,  SocialContainer } from "./styes";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Post, PostsContext } from "../../context/PostsContext";
import Markdown from "react-markdown";

export function PostContent(){
      const { id } = useParams(); 
      const {  GetPost } = useContext(PostsContext)
      const [post, setPost] = useState<Post | null>(null); // Inicializa o estado como null para aguardar o post

    useEffect(() => {
      const fetchPost = async () => {
        if (id) {
          const fetchedPost = await GetPost(id);
          console.log(fetchPost)
          setPost(fetchedPost);
        }
      };
      
      fetchPost();
    }, [id, GetPost]);

    return(
        <>
        <PostContentContainer>
          <LinksContainers>
            <a href="/" className="Links" ><CaretLeft/>VOLTAR</a>
            <a href="https://github.com/tiago-mateus" className="Links" target="_blank">VER NO GITHUB <ArrowSquareOut /></a>
          </LinksContainers>
          <DetailsContent>
            <span className="title">{post?.title}</span>
            <SocialContainer>
              <span><GithubLogo size={20} weight="fill"/>tiago-mateus</span>
              <span><Building size={20} weight="fill"/>CGE</span>
              <span><Users size={20} weight="fill"/> seguidores</span>
            </SocialContainer>
          </DetailsContent>
        </PostContentContainer>
        <Markdown>
          {post?.body}
        </Markdown>
        </>
    )
}