import React from 'react'
import { Row ,Container,Col } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
colHeight =React.createRef();
state ={coloneHeight:0};
_key=[];

    render(){
        return(
        <div id="beast-container">
            <Row xs={1} md={3} className="g-4">
                {this.props.rowData.map((item ,idx)=>{
                    return(
                        <HornedBeasts
                        title={item.title}
                        src={item.image_url}
                        description={this.props.description}
                        showModal={this.props.showModal}
                        updateSelectedBeastData={this.props.updateSelectedBeastData}
                        />
                    )
                })}
            </Row>
        </div>
        )
    }

}
export default Main;