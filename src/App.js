import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row,Col} from "reactstrap";
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';

function App() {
  return (
    <Container fluid className='bg-dark text-white p-0 overflow-hidden'>
  
      <BrowserRouter>
      <Row>
        <Col>
          {/* Aqui vai o Navbar */}
          <Menu />
        </Col>
      </Row>
      
      <Row>
          {/* Aqui vai o conteúdo(rotas do site) */}
          <Col>
          <Routes>
            <Route exact path="/" element={<Home />}  />
            <Route exact path="/cardapio" element={<Cardapio />}  />
            <Route exact path="/contato" element={<Contato />}  />
          </Routes>
          </Col>
      </Row>
      </BrowserRouter>

      <Row>
        {/* Aqui vai o rodapé */}
        <Rodape />
      </Row>

    </Container>
  );
}

export default App;
