import {useState,useEffect} from 'react';
import axios from 'axios';
import Item from '../components/Item'


const TodoList = ()=>{

    const [todos , setTodos ] = useState([]);
    const [text , setText] = useState('');


    





    const addTodo = () =>{
        axios.post('http://localhost:3000/todos',{text})
        .then(res=>setTodos([...todos,response.data]))
        .catch(error=>console.log(error));

        setText('')
    }

    const deleteTodo = (id)=>{
        axios.delete(`http://localhost:3000/todos/${id}`)
        .then(()=>setTodos(todos.filter(todo=>todo._id!=id)))
        .catch(error=>console.log(error));
    }


    return(


        <div>

            <input
            
            type='text'
            value={text}
            
            >
            
            
            
            </input>



        </div>


    )




}
