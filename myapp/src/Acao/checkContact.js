import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CheckContact = () => {
    const [user, setUser] = useState([])
    const [pesquisaContato, setPesquisaContato] = useState("")

    useEffect(() => {
        loadUsers()
    },[])

    const loadUsers = () => {
        fetch("http://localhost:3000/user")
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                setUser(result)
            })
    }


    const handleDelete = (id) => {
        if(window.confirm('Do you really want to delete this user?')){
            fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE',
            
            });
        
            window.location.reload(true);
        
        }
    } 


    const handleSearch = async(e) => {
        e.preventDefault()
          fetch(`http://localhost:3000/user?q=${pesquisaContato}`)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            setPesquisaContato("")
            setUser(result)
          })  
    }

    return (
        <>
        <Link to="/adicionar">adicione um contato</Link>
         <form onSubmit={handleSearch}>
           <input type="text" value={pesquisaContato} onChange={(e)=>setPesquisaContato(e.target.value)} className="pesquisaContato" /> 
           <input type="submit" value="buscar" className="btnBuscar"/>
         </form>
         <table width="100%" border="2px">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Acao</th>
                </tr>
            </thead>   
            <tbody>
                {user && user.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.telefone}</td>
                    
                        <td>
                            <Link to={`/update/${item.id}`}><button>atualizar</button></Link>
                            <button onClick={()=>handleDelete(item.id)}>deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
         </table>        
        
        </>
    )
}

export default CheckContact