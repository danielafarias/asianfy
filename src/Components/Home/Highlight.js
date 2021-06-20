import { Carousel } from "react-bootstrap";
import niziu from '../../img/niziu.jpg';
import chenjue from '../../img/chenjue.jpg';
import exo from '../../img/exo.jpg';


function Highlight() {
    return (
      <Carousel className='highlight'>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={niziu}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>J-POP</h3>
                <p>NiziU 'Take a picture' reached 60,000,000 views!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={exo}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>K-POP</h3>
                <p>EXO 'Don't Fight the Felling' Release!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={chenjue}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>C-POP</h3>
                <p>Chenjue and Ayu release a song!</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default Highlight;