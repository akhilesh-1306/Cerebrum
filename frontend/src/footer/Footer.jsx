import "./Footer.css"

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#fff" }}>
            <div className="container mt-3">
                <div className="row mt-5">
                    <div className=" footer-left col-4">
                        <div className="footer-content text-center mt-5">
                            <p>Privacy policy</p>
                            <p>Terms and conditions</p>
                        </div>
                    </div>
                    <div className=" footer-mid col-4 text-center">
                        <h1>Cerebrum</h1>
                        <div className="social-media">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className=" footer-right col-4">
                        <div className="footer-content  text-center mt-5">
                            <p>About</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>                    
            </div>
        </footer>
    )
}