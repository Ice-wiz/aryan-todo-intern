


const Item = ({todo,deleteTodo}) =>{
    return(
        <div>
            {todo.text}
            <button onClick={()=>deleteTodo(todo._id)}>Delete</button>
        </div>
    )
}

export default Item;