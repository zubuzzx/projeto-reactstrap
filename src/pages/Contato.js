import { Button, Col, Row } from "reactstrap"
import ItemForm from "../components/ItemForm"
import sorrindo from "../images/atendente.jpg"

function Contato(){
    return(
       <div>
        <Row className="my-4">
            <Col>
                <h1 className="display-4 text-center">Fale Conosco</h1>
            </Col>
        </Row>
        <Row className="mb-4">
            <Col>
                <ItemForm label="Nome" name="nome" type="text" ph="digite seu nome"/>
                <ItemForm label="Email" name="email" type="email" ph="Digite seu email" />
                <ItemForm label="Telefone" name="telefone" type="tel" ph="Digite seu telefone" />
                <ItemForm label="Assunto" name="assunto" type="text" ph="Informe o assunto da sua mensagem" />
                <ItemForm label="Mensagem" name="mensagem" type="textarea" ph="Digite a mensagem a ser encaminhada para nossa equipe." />           
                <Button color="primary" block>Enviar</Button>
            </Col>
            <Col>
                <img src={sorrindo} className="rounded-circle d-block mx-auto" alt="Atendente"></img>
            </Col>
        </Row>
       </div>
    )     
}

export default Contato