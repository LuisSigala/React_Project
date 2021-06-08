import React from "react"
import BadgeDetailsUi from "-BadgeDetailsUi"
import api from "../libs/fetch"

class BadgeDetails extends React.Component{
    state = {
        loading: false,
        error: null,
        data: {},
    } 
    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading:true, error: null})
        try {
            this.setState({loading: false, })
        } catch (error) {
            
        }
    }
}

export default BadgeDetails;