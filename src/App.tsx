import { ToastContainer } from "react-toastify"
import Home from "./view/Home"
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Home/>
    <ToastContainer theme="colored" position ={toast.POSITION.BOTTOM_RIGHT}/>
    </>
  )
}

export default App
