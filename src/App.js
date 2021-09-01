import React from "react";
import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";
import rowData from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast'

class App extends React.Component{
constructor(props){
super(props)
this.state={
  show:false ,
  title:'',
  imageUrl:'',
  discription:'',
  data:rowData
}

}

showModel =()=>{
  this.setState({
    show:true
  })
}
handleClose=()=>{
  this.state({
    show:false
  })
}
updateSelectedBeastData =(title,src,description)=>{

this.setState({
  title:title,
  src:src,
  description:description
})

}
render(){
return(
  <>
  
  <Header />
     <Main 
     rowData={rowData}
     showModel={this.showModel}
     updateSelectedBeastData={this.updateSelectedBeastData}
     
     
     />
     <SelectedBeast
     show={this.state.show}
     handleClose={this.handleClose}
     title={this.state.title}
     src={this.state.src}
     description={this.state.description}
     
     />
<Footer/>

  
  </>
)

}


}








export default App;
