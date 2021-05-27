import React from "react" 
import {Link} from "react-router-dom"
import "./Sign_In.css"

class Sign_In extends React.Component{
    render(){
        return(
            <React.Fragment>
                <center>            
                <div className="contain">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <center>
                        <button type="submit" class="btn btn-primary m-2 col-7">Submit</button>
                        </center>
                </div>
                </center> 
            </React.Fragment>
        );
    }
}

export default Sign_In;