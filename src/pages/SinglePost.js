import { Link, useLoaderData } from "react-router-dom"

// destructure the props we need for the post, including the match to the router prop
const Show = () => {
    // use the data passed through the Show loader method
    const post = useLoaderData()

    ////////////////////
    // Style
    ////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto",
    }

    return (
        <div style={div}>
            <h1>{post.subject}</h1>
            <h2>{post.details}</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Show