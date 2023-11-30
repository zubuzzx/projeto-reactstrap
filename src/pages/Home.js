import { Col, Row } from "reactstrap";
import CarouselInicio from "../components/CarouselInicio";
import ItemCardapio from "../components/ItemCardapio";
import churras from "../images/churras.jpg";
import hamburguer from "../images/hamburguer.jpg";
import pizza from "../images/pizza.jpg";
import coxinha from "../images/coxinha.jpg";

function Home(){
    return(
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o Carousel */}
                    <CarouselInicio />
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Mais Pedidos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCardapio titulo="Churrasco" img={churras} descricao="Churrasco bacana"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Hamburguer" img={hamburguer} descricao="burgão brabo"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Pizza" img={pizza} descricao="pizza daora"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Coxinha" img={coxinha} descricao="coxinha frango 2.0 motor turbo e freio ABS"/>
                </Col>
            </Row>
        </div>
    )
}

export default Home;