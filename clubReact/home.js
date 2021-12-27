import React from "react";
import ReactDOM from "react-dom";
import Soccer from "./home1.jpg" ;

let socImage = <img src={Soccer} style={{height:'300', width:"1000"}}  />;
const Home = () => {
    console.log("home")
    return (
        <><header>
            <h1>Gotham Soccer Club</h1>
        </header>
        <main>
                 <figure>
                {socImage}
                <figcaption  >Home Page Image</figcaption>
                </figure>
                <h3>what is Soccer?</h3>
                <p>Soccer is a game played by two teams with 11 players each on a field with a goal for each team &#9917;.</p>
                <h3>Goal of this club</h3>
                <p>Utilize all the 11 players on the field in the best possible way &#128364;.</p>
            </main><footer>
                &copy;2021 - GothamSoccerClub
            </footer></>
    )
}

export default Home;