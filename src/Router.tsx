import { Route, Routes } from "react-router-dom"
import { Default } from "./layout/Default"
import { Blog } from "./pages/Blog"
import { PostContent } from "./pages/PostContent"

export function Router(){
    return(
       <Routes>
            <Route path="/" element={<Default/>}>
                <Route index element={<Blog/>}/>
                <Route path="post/:id" element={<PostContent/>}/>
            </Route>
       </Routes>
    )
}