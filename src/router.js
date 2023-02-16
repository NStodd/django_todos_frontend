import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import { createAction, deleteAction, updateAction } from "./actions"
import App from "./App"
import { indexLoader, showLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>  {/*Index Route*/}
            <Route path="post/:id" element={<Show/>} loader={showLoader}/> {/*Show Route*/}
            <Route path="create" action={createAction}/> {/*Create Route*/}
            <Route path="update/:id" action={updateAction}/> {/*Update Route*/}
            <Route path="delete/:id" action={deleteAction}/> {/*Delete Route*/}
        </Route>
    </>
))

export default router