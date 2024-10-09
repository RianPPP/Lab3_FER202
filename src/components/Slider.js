import { Carousel } from 'react-bootstrap';
import pizza1 from '../images/pizza1.jpg';
import pizza2 from '../images/pizza2.jpg';
import pizza3 from '../images/pizza3.jpg';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" text="First slide" src={pizza1} />
                <Carousel.Caption>
                    <h3>Neapolitan pizza</h3>
                    <p>If you are looking for a traditional Italian pizza, the Neapolitan pizza is the best option. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" text="Second slide" src={pizza2} />
                <Carousel.Caption>
                    <h3>Neapolitan pizza</h3>
                    <p>If you are looking for a traditional Italian pizza, the Neapolitan pizza is the best option.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" text="Third slide" src={pizza3} />
                <Carousel.Caption>
                    <h3>Pineapple pizza</h3>
                    <p>
                        If you are looking for a traditional Italian pizza, the Neapolitan pizza is the best option.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;