import React from "react";
import ReactDOM from "react-dom";

// const Menu = (props) => {
//     if(props.stateValue=="user")
//     {
//         return(
//             <nav>
//         <ul>
//             <li className="active"><a href="./index.html">Home</a></li>
//             <li ><a href="./clubactivities.html">Club Activities Page</a></li>
//             <li ><a href="./login.html">Logout</a></li>
//         </ul>
//     </nav>
//         )
//     }
//     else if(props.stateValue=="guest"){
//     return (
//         <nav>
//         <ul>
//             <li ><a href="./index.html">Home</a></li>
//             <li ><a href="./clubactivities.html">Club Activities Page</a></li>
//             <li className="active"><a href="./login.html">Login</a></li>
//             <li ><a href="./applicationpage.html">Membership</a></li>
//         </ul>
//     </nav>
//     )}
// }

class Menu extends React.Component {
    // constructor and event handlers not shown
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = { 
            show: "home",
            homehighlight:"active",
            loginhighlight:"",
            activityhighlight:"",
            membershiphighlight:"",adminactivityhighlight:""
        }; 
        
    }

    homeHandler(){
        console.log('inside home handler')
        this.setState({show:'home',homehighlight:"active",
        loginhighlight:"",
        activityhighlight:"",
        membershiphighlight:"",adminactivityhighlight:""}, () => {
            this.props.childValue(this.state.show);
        })
    }

    activityHandler(){
        this.setState({show:'activities',homehighlight:"",
        loginhighlight:"",
        activityhighlight:"active",
        membershiphighlight:"",adminactivityhighlight:""},() => {
            this.props.childValue(this.state.show);
        })
    }
    loginHandler(){
        this.setState({show:'login',homehighlight:"",
        loginhighlight:"active",
        activityhighlight:"",
        membershiphighlight:"",adminactivityhighlight:""},() => {
            this.props.childValue(this.state.show);
        })
    }
    membershipHandler(){
        this.setState({show:'membership',homehighlight:"",
        loginhighlight:"",
        activityhighlight:"",
        membershiphighlight:"active",adminactivityhighlight:""},() => {
            this.props.childValue(this.state.show);
        })
    }
    adminactivityHandler(){
        this.setState({show:'adminactivity',homehighlight:"",
        loginhighlight:"",
        activityhighlight:"",
        membershiphighlight:"",
    adminactivityhighlight:"active"},() => {
            this.props.childValue(this.state.show);
        })
    }
    render(){
        console.log('props in menu', this.props)
        return (
            <nav>
                {this.props.appState==="user" && (
                    <li>
                    <ul className = "ulist">
                    <li className={this.state.homehighlight} onClick={this.homeHandler.bind(this)}><a>Home</a></li>
                    <li className={this.state.activityhighlight} onClick={this.activityHandler.bind(this)}><a>Club Activities Page</a></li>
                    <li className={this.state.loginhighlight} onClick={this.loginHandler.bind(this)}><a>Logout</a></li>
                    </ul>
                    </li>
                )}
                {this.props.appState==="guest" && (
                    <li>
                    <ul  className = "ulist">
                    <li className={this.state.homehighlight} onClick={this.homeHandler.bind(this)}><a>Home</a></li>
                    <li className={this.state.activityhighlight} onClick={this.activityHandler.bind(this)}><a>Club Activities Page</a></li>
                    <li className={this.state.loginhighlight} onClick={this.loginHandler.bind(this)}><a>Login</a></li>
                    <li className={this.state.membershiphighlight}><a onClick={this.membershipHandler.bind(this)}>Membership</a></li>
                    </ul>
                    </li>
                )}
                {this.props.appState==="admin" && (
                    <li>
                    <ul  className = "ulist">
                    <li className={this.state.homehighlight} onClick={this.homeHandler.bind(this)}><a>Home</a></li>
                    <li className={this.state.activityhighlight} onClick={this.activityHandler.bind(this)}><a>Club Activities Page</a></li>
                    <li className={this.state.adminactivityhighlight}><a onClick={this.adminactivityHandler.bind(this)}>Manage Activities</a></li>
                    <li className={this.state.loginhighlight} onClick={this.loginHandler.bind(this)}><a>Logout</a></li>
                    </ul>
                    </li>
                )}
            </nav>
        )
       
    }
      
    }
export default Menu;