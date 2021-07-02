import { Component } from 'react';
import { Api } from '../../Api/Api';
import loadingImg from '../../img/loadingImg.svg';
import { Container, Row } from 'react-bootstrap';
import CardGenre from './CardGenre';
import '../../Styles/Genres.scss';


class ReadAllCountries extends Component {
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
        const itemsWithName = items.filter(item => Boolean(item.genreName));

        this.setState({
            isLoading: false,
            items: itemsWithName,
            filteredItems: itemsWithName
        })
    }

    render() {
        const { isLoading, filteredItems } = this.state;

            if (isLoading) {
                return (
                    <Container className='page'>
                        <Row>
                            <img className="loading" src={loadingImg} />
                        </Row>
                    </Container>
                );
            } else {
                if(filteredItems == false) {
                    return(
                        <Container className='page'>
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
                                    <CardGenre item={item} key={item.id} />
                                ))}
                            </Row>
                        </Container>
                    );
                }
            }
        
    }
}

export default ReadAllCountries;