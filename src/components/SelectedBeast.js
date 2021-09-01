import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.props.imgSrc} />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>Description{this.props.description}</Card.Text>
                               <Card.Text>Horns:{this.props.horns}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;