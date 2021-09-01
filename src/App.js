import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import dataJson from './data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJson,
      show: false,
      title: "",
      description: "",
      imgSrc: "",
      horns:"",
    };
  }

  show = (title) => {
    const filterData = dataJson.filter((item) => {
      if (title === item.title) {
        console.log(item);
        return item;
      }
    });
    this.setState({
      show: true,
      data: filterData,
    });
  };

  updateBeast = (title, description, imgSrc,horns) => {
    this.setState({
      title: title,
      description: description,
      imgSrc: imgSrc,
      horns:horns,
    });

    console.log(title);
  };

  close = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Main
          data={dataJson}
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