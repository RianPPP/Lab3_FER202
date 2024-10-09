import { Card, Col, Button,Row } from 'react-bootstrap';
import menu1 from '../images/menu1.jpg';
import menu2 from '../images/menu2.jpg';
import menu3 from '../images/menu3.jpg';
import menu4 from '../images/menu4.jpg';



function Menu(){
    return(
        <Row className='mt-5'>

    <Col>
        <Card >
            <Card.Img variant="top" src={menu1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src={menu2} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src={menu3} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img variant="top" src={menu4} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Col>

</Row>
    );
}

export default Menu;



