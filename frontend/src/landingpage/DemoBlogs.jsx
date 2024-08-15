import BlogImageLeft from "../blog/BlogImageLeft"
import BlogImageRight from "../blog/BlogImageRight"

export default function DemoBLogs(){
    return (
        <div className=" demo-blog-section container mt-5">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <BlogImageLeft/>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <BlogImageRight/>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <BlogImageLeft/>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}