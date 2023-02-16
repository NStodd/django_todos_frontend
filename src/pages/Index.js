// Index.js
// Index Page View
import Post from "../components/Post"
import { useLoaderData, Form } from "react-router-dom"


const Index = (props) => {
    const todos = useLoaderData()
    //
    return <>
        <div style={{textAlign: "center"}}>
            <h2>Create a Todo</h2>
            <Form action="/create" method="post">
                <input type="text" name="subject" placeholder="Todo Subject"/>
                <input type="text" name="details" placeholder="Todo Details"/>
                <button>Create New Todo</button>
            </Form>
        </div>
        {todos.map((post) => <Post post={post} key={post.id}/>)}
    </>
}

export default Index

