import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Index() {
  return <>
    <Navbar />
    <Container>
      <Row>
        <Col className="bg-primary">1 of 2</Col>
        <Col className="bg-primary-subtle">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-info">1 of 3</Col>
        <Col className="bg-info-subtle">2 of 3</Col>
        <Col className="bg-dark-subtle">3 of 3</Col>
      </Row>
    </Container>
    <Footer />
  </>
}



