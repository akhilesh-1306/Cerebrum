import { useEffect,useState } from "react";
import BlogImageLeft from "../blog/BlogImageLeft";
// import BlogImageRight from "../blog/BlogImageRight";
import axios, { all } from "axios";

export default function ExplorePage(){
    let [allPosts,setAllPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/allPosts")
        .then((res)=>{
          setAllPosts(res.data);
        })
      },[]);

    return(
        <div className="container">
            <div className="row">
            {allPosts.map((post, index) => {
                return (
                <div className="col-6">
                    <BlogImageLeft content={post.content} title={post.title} mainImage={post.image.url}/>
                </div>
                )
            })}
            </div>
        </div>
    )
}