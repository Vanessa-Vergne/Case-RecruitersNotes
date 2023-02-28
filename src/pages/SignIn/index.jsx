import { Container, Form, Background } from "./styles";
import {  FiMail, FiLock} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignIn(){
    return (
        <Container>
            <Background/>
            <Form>
                <h1>Recruiter's Notes</h1>
                <p>Aplicação para criar e gerenciar informações sobre suas vagas</p>
                <h2>Faça seu login</h2>

                <Input 
                 placeholder = "E-mail"
                 type = "text"
                 icon = {FiMail}    
                 />

                <Input 
                 placeholder = "Senha"
                 type = "password"
                 icon = {FiLock}    
                 />

                 <Button title="Entrar "/>

                 <Link to="/signup">
                    Criar conta
                    </Link>      
            </Form>
            
        </Container>



    )


}