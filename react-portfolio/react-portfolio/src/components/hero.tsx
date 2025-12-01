import profilePic from '../../../../images/profilePic.jpg';

function Hero() {
    return (
        <section className="hero">
            <img src={profilePic} alt="Profile Picture" className="profile-pic" />
            <h1>Hi, I am Matias Dure</h1>
            <p>I build solutions across web platforms, mobile applications, embedded systems, and gaming experiences.</p>
            <div className="hero-buttons">
                <button className="btn primary-btn">Get in touch</button>
                <button className="btn secondary-btn">Github</button>
                <button className="btn secondary-btn">LinkedIn</button>
                <button className="btn secondary-btn">Download CV</button>
            </div>
        </section>
    );
}

export default Hero;