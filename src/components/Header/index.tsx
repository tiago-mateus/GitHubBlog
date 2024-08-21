import { HeaderContainer } from "./styles";
import bg from '../../assets/Cover.png'
export function Header(){
    return (
        <HeaderContainer>
            <img src={bg} alt="" />
        </HeaderContainer>
    )
}