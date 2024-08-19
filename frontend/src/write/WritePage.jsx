export default function WritePage(){
    return(
        <div className="container  border-top border-bottom mb-5 mt-5">
            <form className="text-center mb-5 mt-5">
                <label for="image">Image</label>&nbsp;
                <input type="file" id="image" name="image"></input><br/><br/>
                <label for="title">Title</label>&nbsp;
                <input id="title" name="title"></input><br/><br/>
                <label for="content">Content</label>&nbsp;
                <input id="content" name="content"></input> <br/><br/>
                <button type="submit" className="btn btn-dark post-button">Post</button>
            </form>
        </div>
    )
}