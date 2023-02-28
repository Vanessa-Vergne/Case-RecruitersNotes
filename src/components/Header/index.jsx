import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';



export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img 
                   src=" https://github.com/vanessa-vergne.png"
                   alt='= "Foto do usuário'
                   />

                   <div>
                    <span>Bem-vinda,</span>
                    <strong>Vanessa Vergne</strong>
                   </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>


    )
}