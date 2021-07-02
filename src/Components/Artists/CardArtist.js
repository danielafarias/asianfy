import { Component } from "react";
import '../../Styles/Artists.scss';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class CardArtist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            item: this.props.item
        }
    }

    render() {
        const { item } = this.state;

        return (
            <Col xs="12" sm="6" md="4" lg="3">
                <Card className='card-artist' style={{ md: '25rem' }}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.genre}
                        </Card.Text>
                        <Card.Text> 
                            From: {item.country}
                        </Card.Text>
                        <Link to={`/artist/${item._id}`} className="btn btn-primary">More...</Link>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default CardArtist;