import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/global"
import { BrowserRouter} from "react-router-dom"
import { PostsProvider } from "./context/PostsContext"
import { Router } from "./Router"

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter >
        <GlobalStyles/>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
