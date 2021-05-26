import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"
import "./NewBadge.css"
import api from "../../libs/api"


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
        },
    };

    handleChange = event => {
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
        
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true, error:null})

        try {
            await api.badges.create(this.state.form)
            this.setState({loadign:false, error:null})
            this.props.history.push("/")
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <Badge
                            header_picture = {this.state.form.header_picture || "https://images.freeimages.com/images/small-previews/89a/one-tree-hill-1360813.jpg"}
                            profile_picture = {this.state.form.profile_picture || "https://www.gravatar.com/avatar/205e460b479e8e5b48aec07710c08d50"}
                            name = {this.state.form.name || "Name LastName"}
                            age = {this.state.form.age || "XX"}
                            city = {this.state.form.city || "State Country"}
                            followers = {this.state.form.followers || "0"}
                            likes = {this.state.form.likes || "0"}
                            post = {this.state.form.post || "0"}
                        ></Badge>
                    </div>
                    </div>
                    <div className="col">
                    <div className="col-6">
                        <BadgeForm 
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form}>
                        </BadgeForm>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;