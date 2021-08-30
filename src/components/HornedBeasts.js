import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';


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
})
}
    render(){
        return(
            <>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imageUrl} onClick={this.addNumberOfPets} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    <p>Number of pets❤️:{this.state.numberOfPets}</p>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </>
        )
    }

}
export default HornedBeasts;