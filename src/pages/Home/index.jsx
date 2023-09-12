import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Subheader, Content, Title, NewNote } from "./styles";

import { Note } from '../../components/Note';
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Section } from '../../components/Section';
import  { ButtonText } from "../../components/ButtonText"

export function Home() {
    return (
        <Container>
            <Header />

            <Subheader>
                <Title>
                    Meus Filmes
                </Title>
                <NewNote to="/new">
                    <FiPlus />
                        Adicionar Filme
                </NewNote>
            </Subheader>


            <Content>
                <Section title="Minhas notas">
                    <Note data={{ 
                        title: `React`, 
                        tags: [
                            { id: '1', name: 'react'},
                            { id: '2', name: 'rocketseat'}
                        ]
                    }}
                        />
                </Section>
            </Content>
        </Container>
    )
}