import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles';
import { Header} from '../../components/Header';
import { Input} from '../../components/Input';
import { Note} from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText'


export function Home () {
    return (
        <Container>
            <Brand>
            <h1>Recruiter's notes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Vagas FrontEnd"  isActive /></li>
                <li><ButtonText title="Vagas BackEnd"/></li>
                <li><ButtonText title="Vagas DevOps"/></li>
                <li><ButtonText title="Vagas FullStack"/></li>
                <li><ButtonText title="Vagas Mobile"/></li>

            </Menu>

            <Search>
                <Input  placeholder="Pesquisar por fichas" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas fichas">
                <Note
                    data= {{
                        title: ' Vaga Carrefour',
                        tags: [
                            {id: '1', name:'react'},
                            {id: '2', name: 'JavaScript'},
                            {id: '3', name: 'Testes'}
                            
                        ]
                    }}
                    />

                <Note
                    data= {{
                        title: ' Vaga Magalu',
                        tags: [
                            {id: '1', name:'react'},
                            {id: '2', name: 'TypeScript'},
                            {id: '3', name: 'Testes'}
                            
                        ]
                    }}
                    />
                    

                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar ficha
            </NewNote>




        </Container>



    )
}