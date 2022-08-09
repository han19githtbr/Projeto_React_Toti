import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    const data={
        nome: nome,
        email: email,
        telefone: telefone
    }

    const handleSubmit=()=>{
        fetch(`http://localhost:3000/user/`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                data
            )
        });
    
    navigate("/")
    }


    const handleCancel=()=>{

    }
    return(
         <form>
            <input 
              value={nome} 
              setNome={setNome} 
              onChange={(e)=>setNome(e.target.value)} 
              placeholder = "nome do contato" />
              <br></br>
            <input 
              value={email} 
              setNome={setEmail} 
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder = "email do contato" />
              <br></br>
            <input 
              value={telefone} 
              setNome={setTelefone} 
              onChange={(e)=>setTelefone(e.target.value)} 
              placeholder = "telefone do contato" />
              <br></br>
            
            <input 
              type="submit" 
              className="btnAtion1 btnAtion" 
              onClick={handleSubmit}/>
            <input 
              type="submit" 
              value="cancel" 
              onClick={handleCancel} 
              className="btn"/>
         
         </form>   

    )
}

export default AddContact