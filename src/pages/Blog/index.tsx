import { BlogContainer, PostContainer, ProfileContainer, ProfileInfo, SearchContainer, SocialContainer } from "./styles";
import { ArrowSquareOut,  Building, GithubLogo, Users } from "@phosphor-icons/react";
import { SearchForm } from "./components/SearchForm";
import { Post } from "./components/Post";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";


export function Blog(){
  const { user, posts } = useContext(PostsContext)
    return(
      <BlogContainer>
        <ProfileContainer>
            <img src={user?.avatar_url} alt="" width={150} height={150}/>
            <ProfileInfo>
              <span className="name">{user?.name}</span>
              <span className="bio">{user?.bio}</span>
              <SocialContainer>
                <span><GithubLogo size={20} weight="fill"/>tiago-mateus</span>
                <span><Building size={20} weight="fill"/>CGE</span>
                <span><Users size={20} weight="fill"/>{user?.followers} seguidores</span>
              </SocialContainer>
            </ProfileInfo>
            <a href="https://github.com/tiago-mateus" className="LinkGitHub" target="_blank">GITHUB <ArrowSquareOut /></a>
        </ProfileContainer>
        <SearchContainer>
          <SearchForm />
        </SearchContainer>
        <PostContainer>

          {posts?.map((item) => {
            console.log(item.updated_at)
              const publishedDateReltiveToNow = formatDistanceToNow(item.updated_at, {
                locale: ptBR,
                addSuffix: true
              });
            return (
              <Link to={"/post/"+item.number} >
                <Post title={item.title} content={item.body} date={publishedDateReltiveToNow} key={item.id}/>
              </Link>
            )
          })}
            </PostContainer>

      </BlogContainer>
    )
}