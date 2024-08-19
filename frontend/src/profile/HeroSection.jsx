import "./HeroSection.css";

export default function HeroSection(){
    return(
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row profile-image">
                        <img src="../../public/heroImage.png"></img>
                    </div>
                    <div className="row profile-details text-center">
                        <h4>Username : </h4>
                        <p>Akhilesh</p>
                        <h4>Email : </h4>
                        <p>hello123@gmail.com</p>
                        <h4>Total posts : </h4>
                        <p>20</p>
                    </div>
                    <div className="row edit-button">
                        <button className="btn btn-dark">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}