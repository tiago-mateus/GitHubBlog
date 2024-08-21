import Markdown from "react-markdown";
import { Card, PostContainer } from "./styles";

interface PostProps {
    title: string,
    content: string
    date: string
}
export function Post({title, content, date}: PostProps){
    return (
        <PostContainer>
            <Card>
                <header>
                    <span className="title">{title}</span>
                    <span className="date">{date}</span>
                </header>
                <main>
                    <span>
                    <Markdown>{content}</Markdown> 
                    </span>
                </main>
            </Card>
        </PostContainer>
    )
}