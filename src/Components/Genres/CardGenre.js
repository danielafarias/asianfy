import { Component } from "react";
import '../../Styles/Genres.scss';
import { ListGroup, Container } from 'react-bootstrap';


class CardGenre extends Component {
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
            <Container>
                <ListGroup id='genres-list'>
                    <ListGroup.Item id='genres-list-name' action variant="info" href={`/genre/${item._id}`}>
                        {item.genreName}
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        )
    }
}

export default CardGenre;