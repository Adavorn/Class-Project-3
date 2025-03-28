import {Link} from "react-router-dom"
import {useEffect, useState} from "react"

const initial_todo_items = [
  {id:1,name:"item one", completed:false},
  {id:2,name:"item two", completed:false},
  {id:3,name:"item three", completed:true},
  {id:4,name:"item four", completed:false},
  {id:5,name:"item five", completed:false}
];

function Home() {

  const [tmplist, setTmplist] = useState(initial_todo_items);
  const [todolist, setTodolist] = useState(null);
  
  useEffect(()=>{

    console.log("#App::Home page load")

    
  },[])


    return (
      <>
        <h3>Demo Task Manager App</h3>
        <p></p>
        <div>
            <input type="text" maxLength={25} placeholder="* add item"/>
            {" "} <button>Add</button> {" "} <a>clear</a>
            <p></p>
        </div>
        <Link to="/contact">Contact Us</Link>
        <p></p>
        <a>all</a> {"|"} 
        <a>complete</a> {"|"} 
        <a>in-complete</a> {"|"} 
        <p></p>
        <div>
          <span> [ ] itema -x- </span><br/>
          <span> [x] itemb -x- </span><br/>
          <span> [ ] itemc -x- </span><br/>
          <span> [x] itemd -x- </span><br/>
        </div>
        <p>footer @ 2025</p>
      </>

    );
  }
  
  export default Home;