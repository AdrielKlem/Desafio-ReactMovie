import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'

import { Container, Form } from "./styles";

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/">Voltar</Link>
                        <h1>Novo Filme</h1>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Link úteis">
                        <NoteItem value="https://rockseat.com.br" />
                        <NoteItem isnew placeholder="Novo Link"/>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isnew placeholder="Novo Tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}