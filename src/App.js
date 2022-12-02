import { BrowserRouter , Routes, Route} from "react-router-dom";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import CardDetails from "./components/CardDetails";


export default function App(){
  
  return(
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/:id" element={<CardDetails />} />
      <Route path="/about" element={<h1>about</h1>}/>
    </Routes>
    </BrowserRouter>
    
  )
}