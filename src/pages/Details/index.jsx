import { Container, Links, Content } from "./styles";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";



export  function Details(){

return(
  <Container>
  <Header/>

  <main>
    <Content>
      <ButtonText title="Excluir ficha" />

      <h1>
         Candidato 01
      </h1>
      <Tag  title="Back-end" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Quidem ea atque quos a tenetur, exercitationem debitis earum 
         aliquid itaque vitae quisquam natus veniam id voluptate qui,
         dignissimos eos doloremque numquam.
      </p>

  <Section title="Links úteis" >
  <Links>
    <li> <a href= "#">Linkedin</a> </li>
    <li> <a href= "#">GitHub</a> </li>
    <li> <a href= "#">Portfolio</a> </li>
    <li> <a href= "#">Curriculo</a> </li>
  </Links>
  </Section>

  <Section title= "Marcadores">
  <Tag  title="TypeScript" />
   <Tag  title="Node.js" />
    <Tag  title="Express" />
    <Tag  title="MySQL" />
    <Tag  title="MongoDB" />
  </Section>


  <Button   title="Voltar"></Button>
  </Content>
  </main>
  </Container>

  

)

}