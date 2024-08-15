import "./Blog.css"

export default function BlogImageLeft({mainImage,title,content}){
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-4">
                    <h1>Title</h1>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptate sunt adipisci nemo aliquam consectetur iure voluptatem saepe necessitatibus dicta, illo, distinctio quas dignissimos ullam autem qui fuga aspernatur libero! </p>
                    <p className="text-center fs-6">-Author</p>
                </div>
                <div className=" blog-image-section col-8">
                    {/* <img src={mainImage}></img> */}
                    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image"></img>
                </div>
            </div>
        </div>
    )
}