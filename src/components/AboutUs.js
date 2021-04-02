import React from 'react';
import './AboutUs.css'
import Team from './Pictures/team.jpg'

function AboutUs() {
    return (
        <div class="aboutUsContainer">
            <h3>About Us</h3>
            <div className="aboutUs">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat, nunc id imperdiet finibus, enim nisl scelerisque sem, eu interdum ipsum purus sed orci. Nunc viverra, erat nec condimentum elementum, est lectus scelerisque eros, in molestie dui dui vitae odio. Quisque dapibus sapien sed magna pretium cursus. In hac habitasse platea dictumst. Cras vulputate turpis non erat viverra, non rutrum urna porttitor.</p>
                <img className="teamImage" src={Team}/>
            </div>
        </div>
    )
}

export default AboutUs;