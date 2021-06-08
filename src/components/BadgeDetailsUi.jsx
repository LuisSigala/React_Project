import React from "react"
import Badge from "./Badge"
import Hero from "./Hero"
import Footer from "./Footer"

const BadgeDetailsUi = props =>{
    const badge = props.badge

    return(
        <React.Fragment>
            <Hero h={"10vh"}></Hero>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            header_img_url = {badge.}
                        
                        ></Badge>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default BadgeDetailsUi;