import { Carousel } from "react-bootstrap";
import niziu from '../../img/niziu.jpg';
import chenjue from '../../img/chenjue.jpg';
import exo from '../../img/exo.png';


function Highlight() {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={niziu}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>Niziu</h3>
                <p>Take a picture 60,000,000 views!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={exo}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>EXO</h3>
                <p>'Don't Fight the Felling' Release!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={chenjue}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>Chenjue</h3>
                <p>New collab! Chenjue and Ayu release a song.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default Highlight;