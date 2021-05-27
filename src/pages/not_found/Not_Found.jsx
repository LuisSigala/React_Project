import React from "react" 
import {Link} from "react-router-dom"
import "./Not_Found.css"

class Not_Found extends React.Component{
    render(){
        return(
            <React.Fragment>
                <center>            
                    <img src="https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg" alt="" className="notfound"/>
                </center> 
            </React.Fragment>
        );
    }
}

export default Not_Found;