import React, {useState, useEffect} from 'react';
import api from '../../servers/api'
import './style.css';
import {Link} from "react-router-dom";
export default function User(){

  const [users, setUsers] = useState([]);
  useEffect(()=>{

    api.get('users').then(response =>{
      setUsers(response.data);
    })

  },[])
    return(

        <div id = "user-container">

          <h1> Lista de usuários </h1>
          <Link className = "button" id = "create-link" to = {"/create"} type = "button"> Criar </Link>
          <ul id = "user-list">
            {users.map(user => (
              <li key = {user.id}>
                <strong> Nome </strong>
                <p> {user.name} </p>
                <strong> Email </strong>
                <p> {user.email} </p>
                <strong> Idade </strong>
                <p> {user.idade} </p>
                <strong> Empresa </strong> 
                <p> {user.empresa} </p>

                <div className = "actions">
                    <button className = "button" type = "button"> Deletar </button>
                    <button className = "button" type = "button"> Acessar </button>
                </div>
              </li>
            ))}
          </ul>

        </div>


    )

}