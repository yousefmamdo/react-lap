import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card  from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col'


class HornedBeasts extends React.Component{
constructor(props){
    super(props)
    this.state={
        numberOfPets : 0
    }
}
addNumberOfPets= ()=> {
this.setState({
    numberOfPets : this.state.numberOfPets +1
});
//this.props.showModel();
this.props.updateSelectedBeastData (this.props.title,this.props.src,this.props.description)
}
    render(){
        return(
            <>
 <Col>
<Card style={{ width: '18rem' }}
bg="dark"
text="light"
onClick={this.addNumberOfPets}>
  <Card.Img variant="top" src={this.props.src}  />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    <p>Number of pets❤️:{this.state.numberOfPets}</p>
    </Card.Text>
  
  </Card.Body>
</Card>
</Col>
            </>
        )
    }

}
export default HornedBeasts;