import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card  from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'


class HornedBeasts extends React.Component{
constructor(props){
    super(props)
    this.state={
        numberOfPets : 0,
    };
}
addNumberOfPets= ()=> {
this.setState({
    numberOfPets : this.state.numberOfPets +1
        });
    };
    show = () => {
        this.props.show(this.props.title);
        this.props.updateBeast(
            this.props.title,
            this.props.description,
            this.props.imgSrc
            , this.props.horns ,
         
        );
    };

    render() {
        return (
            <Col>
                <Card style={{ width: "18rem" }} onClick={this.show}>
                    <Card.Img
                        variant="top"
                        src={this.props.imgSrc}
                        onClick={this.addNumberOfPets}
                    />
                    <Card.Body>

                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>Number of pets❤️ : {this.state.numberOfPets}</Card.Text>
                        <Card.Text>horns:{this.props.horns}</Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default HornedBeasts;