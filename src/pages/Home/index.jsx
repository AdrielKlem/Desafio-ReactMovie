import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Note } from '../../components/Note';
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Section } from '../../components/Section';
import  { ButtonText } from "../../components/ButtonText"

export function Home() {
    return (
        <Container>
            <Header />

            <NewNote to="/new">
                <FiPlus />
                    Adicionar Filme
            </NewNote>


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