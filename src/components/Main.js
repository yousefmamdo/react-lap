import React from "react";
import HornedBeasts from "./HornedBeasts";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Row xs={1} md={3} className="g-4">
          {this.props.data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imgSrc={item.image_url}
                description={item.description}
                horns={item.horns} 
                show={this.props.show}
                updateBeast={this.props.updateBeast}
                
              />
            );
          })}
        </Row>
      </main>
    );
  }
}

export default Main;