import "./Blog.css"

export default function BlogImageLeft({mainImage,title,content}){
    return (
        <div className="container mb-5 mt-5">
            <div className="row">
                <div className=" blog-image-section col-6">
                    {/* <img src={mainImage}></img> */}
                    <img src={mainImage} alt="image"></img>
                </div>
                <div className="col-6">
                    <a href="#" ><h3> {title} </h3></a>
                    <p> {content} </p>
                    {/* <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptate sunt adipisci nemo aliquam consectetur iure voluptatem saepe necessitatibus dicta, illo, distinctio quas dignissimos ullam autem qui fuga aspernatur libero! </p> */}
                    <p className="text-center fs-6">-Author</p>
                </div>
            </div>
        </div>
    )
}