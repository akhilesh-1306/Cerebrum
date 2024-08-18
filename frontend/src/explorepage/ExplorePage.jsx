import BlogImageLeft from "../blog/BlogImageLeft";
import BlogImageRight from "../blog/BlogImageRight";

export default function ExplorePage(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <BlogImageLeft></BlogImageLeft>
                </div>
                <div className="col-6">
                    <BlogImageLeft></BlogImageLeft>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <BlogImageRight></BlogImageRight>
                </div>
                <div className="col-6">
                    <BlogImageRight></BlogImageRight>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <BlogImageLeft></BlogImageLeft>
                </div>
                <div className="col-6">
                    <BlogImageLeft></BlogImageLeft>
                </div>
            </div>
        </div>
    )
}