import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import "./NewBadge.css"


class NewBadge extends React.Component{

    state = {
        loading : false,
        error: null,
        form:{
            header_picture: "",
            profile_picture: "",
            name: "",
            age: "",
            city: "",
            followers: "",
            likes: "",
            post: "",
        }
    }



    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge
                            header_picture = {this.state.form.header_picture || "https://images.freeimages.com/images/small-previews/89a/one-tree-hill-1360813.jpg"}
                            profile_picture = {this.state.form.profile_picture || "https://www.gravatar.com/avatar/205e460b479e8e5b48aec07710c08d50"}
                            
                        ></Badge>
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;