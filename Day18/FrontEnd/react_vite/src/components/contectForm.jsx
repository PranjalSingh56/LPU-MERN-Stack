import React, { useState } from "react";
// const Form = ()=>{
//     let name ="";
//     return(
//         <div>
//             <h2>Form</h2>
//             <input type="text"placeholder="Enter name" onChange={(e)=>{
//                 name = e.target.value;
//                 console.log(name);
                
//                 }} />
//             <button  onClick={()=>alert("Form Submitted"+ name)}>Submit</button>
//         </div>
//     )
// }
// export default Form;


// const Form = ()=>{

//     let tempName = "";
//     const[name, setName] = useState("");
//     const[message, setMessage] = useState("");
//     const[submittedName, setSubmittedName] = useState("");

//     function handlerSubmit(e){
//         e.prevent.Default();
//         const name = e.target.element[0].value;
//         const message =  e.target.element[1].value;
//         setSubmittedName(name);
//         alert(`uncontrolled Submitted:${name}(${message}`)


//     }
//     return(
//         <div>
//          <form action="" onSubmit={handlerSubmit}>
//             <label htmlFor="">Name</label> <br />
//             <input type="text"placeholder="Enter name" value={name}
//                 onChange={(e)=>{setName(e.target.value)  }
//                 onKeyUp={()=>console.log("key released")}
//                 onKeyDown={()=>console.log("key pressed")}

//                 <label htmlFor="">Message</label> <br />
//                 <textarea name="message" placeholder="message" onKeyUp={(e)=>{
//                 setMessage(e.target.value)  
//                 console.log(message);
                
                
//                 }}></textarea> <br />
//             <button  onClick={()=>alert("Form Submitted"+" "+ name +" "+ message)} >Submit</button>
//                 </form>
//         </div>
//     )
// }
//export default Form;

const Form = () => {

  const [name, setName] = useState("ankit");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ name, email, message });
    alert("Form Submitted" +" "+ name)


    setName("");
    setEmail("");
    setMessage("");
  };

  

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        {/* LEFT SIDE — FORM */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2>Contact Me</h2>

          <label>Name</label>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            onKeyDown={(e)=>console.log(e.target.value)}
            placeholder="Enter name"
            style={styles.input}
          />

          <label>Email</label>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            onKeyUp={(e)=>console.log(e.target.value)
            }
            placeholder="Enter email"
            style={styles.input}
          />

          <label>Message</label>
          <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            onKeyPress={(e)=>console.log("key press")}
            placeholder="Enter message"
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>

        {/* RIGHT SIDE — PREVIEW */}
        <div style={styles.preview}>
          <h2>Live Preview</h2>
          <p><strong>Name:</strong> {name || "Typing..."}</p>
          <p><strong>Email:</strong> {email || "Typing..."}</p>
          <p><strong>Message:</strong> {message || "Typing..."}</p>

          <hr />

          <h3>Submitted</h3>
          <p>{submitted.name || "Not submitted yet"}</p>
          <p>{submitted.email}</p>
          <p>{submitted.message}</p>
        </div>

      </div>

    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    fontFamily: "sans-serif"
  },

  card: {
    display: "flex",
    gap: "40px",
    padding: "30px",
    borderRadius: "14px",
    background: "#111827",
    width: "900px", 
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
  },

  form: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  preview: {
    flex: 1,
    background: "#020617",
    padding: "20px",
    borderRadius: "10px"
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #333"
  },

  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    minHeight: "100px"
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#22c55e",
    color: "white",
    cursor: "pointer"
  }
};

export default Form;
