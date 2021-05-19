import React from 'react'


class Headpart extends React.Component{
    
    render(){
        return(
            <header class="header-area">
                
                <div id="home" class="header-hero bg_cover" style={{backgroundImage: "url(https://preview.uideck.com/items/start/assets/images/header-bg.jpg)"}}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-8 col-lg-10">
                                <div class="header-content text-center">
                                    <h3 class="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
                                    <p class="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
                                    <ul class="header-btn">
                                        <li><a class="main-btn btn-one" href="#">GET IN TOUCH</a></li>
                                        <li><a class="main-btn btn-two video-popup" href="https://www.youtube.com/watch?v=r44RKWyfcFw">WATCH THE VIDEO <i class="lni-play"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="header-shape">
                        <img src="assets/images/header-shape.svg" alt="shape"/>
                    </div>
                </div>
        </header>


               
    )
}
}
export default Headpart
