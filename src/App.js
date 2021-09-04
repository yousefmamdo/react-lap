import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import dataRow from './data.json';
import Form from './components/Formes';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataRow,
      show: false,
      title: "",
      description: "",
      imgSrc: "",
      horns:0,
      
    };
  }
  

  show = () => {
    
    this.setState({
      
      show: true,
      
    });
  };

  updateBeast = (title, description, imgSrc,horns) => {
    this.setState({
      title: title,
      description: description,
      imgSrc: imgSrc,
      horns:horns,
    });

 
  };

  close = () => {
    this.setState({
      show: false,
    });
  };


  newHandler = (event) => {
    let newData;
    if(event.target.value==='all'){
      newData=dataRow;
    }else{
      newData = dataRow.filter(item => {
      
        return (item.horns === parseInt(event.target.value));
  
      })
    }
    
    this.setState({
      data: newData
    })
   
  }

  render() {
    return (
      <div>
        <Header  />
        <Form newHandler={this.newHandler} />
        <Main
          data={this.state.data}
          show={this.show}
          updateBeast={this.updateBeast}
        />
        <SelectedBeast
          title={this.state.title}
          close={this.close}
          description={this.state.description}
          data={this.state.data}
          show={this.state.show}
          imgSrc={this.state.imgSrc}
          horns={this.state.horns}
        />
        <Footer />
      </div>
    );
  }
}

export default App;