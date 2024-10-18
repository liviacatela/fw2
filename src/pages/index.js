import Footer from "./component/footer";
import Menu from "./component/navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Index() {
  return <>
    <Menu />
    <Container className="px-3 my-3
    ">
      <Row>
        <Col className="bg-info-subtle">1 of 2</Col>
        <Col className="bg-info">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-info-subtle">1 of 3</Col>
        <Col className="bg-info">2 of 3</Col>
        <Col className="bg-info-subtle">3 of 3</Col>
      </Row>
    </Container>
    <Footer />
  </>
}



