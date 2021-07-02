import { Component } from "react";
import '../../Styles/Countries.scss';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class CardCountry extends Component {
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
                <Card id='country-card' className="bg-dark text-white">
                    <Card.Img id='country-img' src={item.countryImageUrl} alt="Card image" />
                    <Card.ImgOverlay id='country-overlay'>
                        <Card.Title id='country-title'>{item.countryName}</Card.Title>
                        <Link id='country-btn' to={`/country/${item._id}`} className="btn btn-primary">More...</Link>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        )
    }
}

export default CardCountry;