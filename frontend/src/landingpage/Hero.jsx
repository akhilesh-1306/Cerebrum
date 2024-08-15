import "./Hero.css"

export default function Hero(){
    return(
        <div className="Hero-landing-page">
            <div className="hero-image">
                <img src="https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HeroImage" />
            </div>
            <div className="hero-text">
                <h1>EVERY WORD IS A SEED. PLANT YOUR GARDEN TODAY</h1>
                <p>Ink your moments, paint your memories or<br/>
                Dive into seas of stories untold</p>
            </div>
        </div>
    )
}