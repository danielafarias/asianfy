import { Component } from 'react';
import { Api } from '../../Api/Api';
import loadingImg from '../../img/loadingImg.svg';
import { Container, Row } from 'react-bootstrap';
import CardArtist from './CardArtist';
import '../../Styles/Artists.scss';


class ReadAllArtists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            items: []
        }
    }

    async componentDidMount() {
        const request = await Api.buildApiGetRequest(Api.readAllUrl());
        const items = await request.json();
        const itemsWithImageUrl = items.filter(item => Boolean(item.imageUrl));

        this.setState({
            isLoading: false,
            items: itemsWithImageUrl,
            filteredItems: itemsWithImageUrl
        })
    }

    render() {
        const { isLoading, filteredItems } = this.state;

            if (isLoading) {
                return (
                    <Container className='artists-page'>
                        <Row>
                            <img className="loading" src={loadingImg} />
                        </Row>
                    </Container>
                );
            } else {
                if(filteredItems == false) {
                    return(
                        <Container className='artists-page'>
                            <Row>
                                <p className="noData">Oops, nothing here! ʕノ•ᴥ•ʔノ ︵ ┻━┻</p>
                            </Row>
                        </Container>
                    );
                } else {
                    return (
                        <Container>
                            <Row>
                                {filteredItems.map(item => (
                                    <CardArtist item={item} key={item.id} />
                                ))}
                            </Row>
                        </Container>
                    );
                }
            }
        
    }
}

export default ReadAllArtists;