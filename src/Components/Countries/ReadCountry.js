import { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';
import '../../Styles/Countries.scss';

class ReadCountry extends Component {

  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;

    this.state = {
      isLoading: true,
      item: {},
    };
  }

  async componentDidMount() {

    const request = await Api.buildApiGetRequest(
      Api.readSingleUrl(this.id),
    );
    
    const item = await request.json();

    this.setState({
      isLoading: false,
      item,
    });
  }

  render() {

    const {item} = this.state;

    return (
      <>
        <Container className="actions">
          <Link className="btn btn-info" to={'/update-country/' + item._id}>Editar</Link>
          <Link className="btn btn-danger" to={'/delete-country/' + item._id}>Excluir</Link>
        </Container>

        <Container className="info">
          <Card id='country-info'>
            <Card.Img id='country-info-img' variant="top" src={item.countryImageUrl} />
            <Card.Body>
              <Card.Title id='country-info-title'>{item.countryName}</Card.Title>
              <Card.Text id='country-info-text'>
                {item.countryDescription}
              </Card.Text>
            </Card.Body>
          </Card>

          <Link to={`/countries`} className="back-btn">Back</Link>
        </Container>
      </>
    );
  }
}

export default ReadCountry;