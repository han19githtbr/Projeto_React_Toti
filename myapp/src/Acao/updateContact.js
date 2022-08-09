import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateContact = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")


    const { id } = useParams()

        useEffect(()=>{
            fetch(`http://localhost:3000/user/${id}`)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                setNome(result.nome)
                setEmail(result.email)
                setTelefone(result.telefone)
            })
        },[])


    const data={
        nome: nome,
        email: email,
        telefone: telefone
    }    


    const handleSubmit=()=>{
        fetch(`http://localhost:3000/user/${id}`, {
           method: "PUT",
           headers: {
            "Content-Type" : "application/json"
           }, 
           body: JSON.stringify(data) 
        });

        navigate("/")
    }


    const handleCancel=()=>{

    }
    return(
        <>
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
        </>
    )
}

export default UpdateContact
