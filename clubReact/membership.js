import React from "react";
import ReactDOM from "react-dom";

class Membership extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", email: "", password: "", 
        level: "Beginner", comments: "",dialogClass:"hide",
        message:""};
    } 
    submitApplication() {
        // In a real application we'd actually send data to a server here
        // But all we'll do here is show the welcome/thanks dialog
        this.setState({ dialogClass: "show" });
        
        if(this.state.name.length<5||this.state.name.length>25)
        {
            this.setState({message:"error message : name is less than 5 char or its exceeding 25 characters"})
        }
        else if(!(this.state.email.includes('@'))||!(this.state.email.includes('.com')) )
        {
            this.setState({message:"error message : not a valid email address"})
        }
        else if(this.state.password.length<8)
        {
            this.setState({message:"error message : password is too short"})
        }
        else if(this.state.comments.length<1)
        {
            this.setState({message:"error message : comments is empty"})
        }
        else{
            let messageData = `Thank you for login, Name: ${this.state.name},your email:${this.state.email},level: ${this.state.level}`
            this.setState({message:messageData})
        }
    }
    render(){
    return (
        <><header >
        <h1 id="hid">Membership</h1>
    </header>
    <main className={this.state.otherClass}>
        <form id="formid" >
            <label>Name :</label>
            <input type="text" id="Name" required minLength="5" value={this.state.name}
            onInput={(event) => this.setState({ name: event.target.value })} />
            <label>Email :</label>
            <input type="email" id="Email" required  value={this.state.email}
            onInput={(event) => this.setState({ email: event.target.value })}/>
            <label>Password :</label>
            <input type="password" id="Password" minLength="8" required  value={this.state.password}
            onInput={(event) => this.setState({ password: event.target.value })}/>
            <label htmlFor="Level">Level :</label>
            <select name="Level" id="Level" required value={this.state.level}
            onInput={(event) => this.setState({ level: event.target.value })}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
            </select>
            <label>Comments :</label>
            <textarea id="Comments" placeholder="enter your stuff here" value={this.state.comments}
            onInput={(event) => this.setState({comments: event.target.value })}></textarea>
            <button type="button" id="signupid" onClick={this.submitApplication.bind(this)}>Sign up</button>
        </form>
    </main>
    <section id="ThanksDialoge" className={`wrap ${this.state.dialogClass}`}>
    <div className="wrapcenter">
            <p>{this.state.message}</p>
            <button type="button" id="close" onClick={(event) => this.setState({ dialogClass: "hide" })}>Close</button>
            </div>
        </section>
    <footer id="footerid">
        &copy;2021 - GothamSoccerClub
    </footer></>
    )}
}

export default Membership;

