import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
    name: string;
    bio: string;
    avatar_url: string;
    followers: number;
}

export interface Post {
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
    id: string;
    number: string
}

interface PostProviderProps {
    children: ReactNode;
}

interface PostsContextType {
    user: User | undefined;
    posts: Post[];
    GetPost: (id: string) => Promise<Post>;
}

export const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostProviderProps) {
    const [user, setUser] = useState<User>();
    const [posts, setPosts] = useState<Post[]>([]);

    const GetUser = useCallback(async () => {
        try {
            const response = await api.get('/users/tiago-mateus');
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }, []);

    const GetPosts = useCallback(async () => {
        try {
            const response = await api.get('/repos/tiago-mateus/GitHubBlog/issues');
            setPosts(response.data);  // Corrigido: agora o array de posts é definido corretamente.
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }, []);

    const GetPost = useCallback(async (id: string) => {
        try {
            const response = await api.get(`/repos/tiago-mateus/GitHubBlog/issues/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching post with id ${id}:`, error);
            throw error;  // Re-lançando o erro para que o chamador possa lidar com ele.
        }
    }, []);

    useEffect(() => {
        GetUser();
        GetPosts();
    }, [GetUser, GetPosts]);

    return (
        <PostsContext.Provider value={{ user, GetPost, posts }}>
            {children}
        </PostsContext.Provider>
    );
}
