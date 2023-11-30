import { Col, Row } from "reactstrap";
import ItemCardapio from "../components/ItemCardapio";
import bolo from "../images/bolo.jpg"
import churrasco from "../images/churras.jpg"
import coxinha from "../images/coxinha.jpg"
import feijoada from "../images/feijoada.jpg"
import hamburguer from "../images/hamburguer.jpg"
import pastel from "../images/pastel.jpg"
import pizza from "../images/pizza.jpg"
import carne from "../images/prato1.jpg"

function Cardapio(){
    return(
        <div>
            <Row>
                <Col>
                    <h1 className="display-4 text-center m-4">Nosso cardápio</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCardapio titulo="Bolo" img={bolo} descricao="Bolo de aipim hmm delicinha"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Churrasco do Bolsas" img={churrasco} descricao="Xurras do tiktok"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Coxinha" img={coxinha} descricao="coxinha frango 2.0 motor turbo e cambio manual"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="feijucas" img={feijoada} descricao="feijoada de cria pra rebocar a privada depois"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCardapio titulo="Burgui" img={hamburguer} descricao="hamburguinho nham nham totoso OBS: fica melhor com coquinha gelada"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="pastel" img={pastel} descricao="pastelzin de feira o melhor exquece papai VAPOO"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="pitiça" img={pizza} descricao="pizza foda"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="carne" img={carne} descricao="carne com coisas em cima aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacortadoaaaaaaaaaaaaa"/>
                </Col>
            </Row>
        </div>
    )
}

export default Cardapio;