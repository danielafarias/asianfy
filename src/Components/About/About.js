import { Component } from "react";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import '../../Styles/About.scss';
import daniImg from '../../img/dani-avatar.png';

class About extends Component {
    render() {
        return (
            <Card style={{ width: '100%' }}>

                <Card.Img id='img' variant="top" src={daniImg} />

                <Card.Body>
                    <Card.Title id='about-title'>Daniela Cristina de Farias</Card.Title>

                    <Card.Text>
                        I'm Daniela, 20 years old, a developer learner since 2021, studying to be great in front-end;
                        INFP personality, Libra and a fan of niziu, girlgroups and exo, but it doesn't matter.
                        Passioned to Art, Technology, Design, Pets and Games!
                    </Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroupItem>Student at Blue Edtech #GoBluemer</ListGroupItem>
                    <ListGroupItem>Front-end Developer Jr.</ListGroupItem>
                    <ListGroupItem>São Paulo, Brazil</ListGroupItem>
                </ListGroup>

                <Card.Body>
                    <Card.Link target='_blank' href="https://github.com/danielafarias">GitHub</Card.Link>
                    <Card.Link target='_blank' href="https://www.linkedin.com/in/danielacfarias/">LinkedIn</Card.Link>
                </Card.Body>
            </Card>
           
        );
    }
}

export default About;