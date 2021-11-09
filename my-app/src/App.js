import { useState } from "react";


function GreatComponent(pops){
  console.log(pops)
  return <h1> Hello, {pops.name}</h1>
}

function App() {
  return(
<GreatComponent name= "Sumit" children= "222">
  <p> this is </p>
  </GreatComponent>
  )
}


// function App() {
//   let[name, setname] = useState('')
//   let[password, setpassword] = useState('')

//   let message= ''
//   if (name === 'admin'  && password === 'admin') {
//     message = `Hello admin what's up`
//   } else {
//     message = 'who are you man'
//   }
//   return (
//     <div>
//       <span>{message}</span>
//       <input type= "text" value= {name} onChange={updateTextField} />
//       <input type= "password" value= {password} onChange={updatePassword} />
//       <button onClick= {submitForm}> Submit Form</button>
//     </div>
      
//   );

//   function submitForm() {
//      console.log(name, password);
//   }

//   function updatePassword(event) {
//     setpassword(event.target.value)
//   }

//   function updateTextField(event) {
//     setname(event.target.value)
//   }
// }


export default App;
