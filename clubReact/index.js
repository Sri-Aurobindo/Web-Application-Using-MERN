import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Home from "./home";
import Activities from "./activities";
import Login from "./login";
import Membership from "./membership";
import events from "./eventData.json";
import AdminActivity from "./AdminActivity";

// lots of component imports

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { role: "guest", show: "membership" }; 
    }

    // changeValue(param)
    // {
    //     console.log(param);
    //     this.setState({show:param})
    // }
    changeValue = (updateParam) => {
        console.log('updateParam', updateParam)
        this.setState({
            ...this.state,
            show: updateParam
        })
    }

    render() {
        let content;
        console.log('state in home', this.state)
        if(this.state.role=="user")
        {

            if(this.state.show === "home") {
                content = <><Home />
                {/* <AdminActivity props={events}/> */}
                </>
            } 
            else if(this.state.show === "activities") {
                content =   <Activities events={events} />
            } 
            else if(this.state.show === "login") {
                content = <Login />    
            }
            
            //content = <><Membership/><AdminActivity props={events}/></>;
        }
        else if(this.state.role=="guest")
        {
            
            if(this.state.show === "home") {
                content = <Home />
            } 
            else if(this.state.show === "activities") {
                content = <Activities events={events} />
            } 
            else if(this.state.show === "login") {
                content = <Login />    
            }
            else if(this.state.show === "membership") {
                content = <Membership />    
            }
            //content = <><Menu childValue={this.changeValue.bind(this)}/></>;
        }
        else if(this.state.role=="admin")
        {
            
            if(this.state.show === "home") {
                content = <Home />
            } 
            else if(this.state.show === "activities") {
                content = <Activities events={events} />
            } 
            else if(this.state.show === "login") {
                content = <Login />    
            }
            else if(this.state.show === "membership") {
                content = <Membership />    
            }
            else if(this.state.show === "adminactivity") {
                content = <AdminActivity events={events}/>   
            }
            //content = <><Menu childValue={this.changeValue.bind(this)}/></>;
        }
        return (
                <>
                <Menu childValue={this.changeValue.bind(this)} appState={this.state.role}/>
                {content}
                </>
        )
    }
}
// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));