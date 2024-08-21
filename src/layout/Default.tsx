import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import styled from "styled-components"

const DefaultContainer = styled.div`
    padding:0 18rem;
`
export function Default() {
    return(
        <>
            <Header/>
            <DefaultContainer>
                <Outlet/>
            </DefaultContainer>
        </>
        
    )
}