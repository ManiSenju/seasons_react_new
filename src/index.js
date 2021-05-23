import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

// const App = ()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>{console.log(position)},
//         (err) => {console.log(err)}
//     );
//     return <div>Latitude:</div>
// };


class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state ={lat:null,errorMessage:''};
    // }
    state ={lat:null,errorMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage:err.message})      
        );
    }

    componentDidUpdate(){
        console.log("component rerendred");
    }

    renderContent(){
        let msg;
        if(this.state.errorMessage && !this.state.lat)
            msg = <div>Error:{this.state.errorMessage}</div>
        else if(this.state.lat && !this.state.errorMessage)
            msg = <SeasonDisplay lat={this.state.lat}/>
        else
            msg = <Spinner message="please accept the location request"/>
        
        return msg;
    }

    render(){
        
        return <div className="border red">{this.renderContent()}</div>
        
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)