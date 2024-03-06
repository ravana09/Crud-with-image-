import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from "react";
import axios from "axios"

function App() {

 
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [number  , setNumber ] = useState("");
  const [response   , setResponse ] = useState("");


  useEffect(()=>{
   const timer= setTimeout(() => {
    setResponse("")
      
    }, 3000);

    return()=>{clearTimeout(timer)}
    


  },[response])


  // console.log(name)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
      name:name,
      email:email,
      number:number 
    }


    axios.post("http://localhost:5000/post",data)
    .then((res)=>{
      console.log(res.data.data);
      setResponse(res.data.message)


    })
    .catch((err)=>{
      console.log("Errror: fetch a error ",err)

    })
  };








  return (
    <div className="App">

      <form>
        <fieldset>
          <img src=''></img>
        <label  htmlFor='name'>Name : </label>
        <input type="text"
         placeholder='enter your name '
         value={name}
          onChange={(e)=>{
         setName(e.target.value)
        }}></input><br/>


       <label htmlFor='email'>Email : </label>
       <input  type="email"
         placeholder='enter your email '
         value={email}
          onChange={(e)=>{
            setEmail (e.target.value)
        }}></input><br/>


        <label htmlFor='number'>Phone number  : </label>

      <input type="tel"
         placeholder='enter your phone number  '
         value={number}
          onChange={(e)=>{
            setNumber(e.target.value)
        }}></input><br/>

        <button type="submit" onClick={handleSubmit}>submit</button>
        </fieldset>
      </form>

      <p>{response}</p>
      
   

  
    </div>
  );
}

export default App;
