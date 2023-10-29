import axios from 'axios'
const baseUrl = "https://todoapp-pc61.onrender.com"
const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
    .then(({data})=>{
        console.log('data ----> ',data);
        setToDo(data)
    })
}
const addToDo =(text,setText,setToDo)=>{
    axios
    .post   (`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
}

const updateTodo =(toDoId,text,setToDo,setText,setIsUpdated)=>{
    axios
    .post(`${baseUrl}/update`,{_id:toDoId,text})
    .then((data)=>{
        setText("")
        setIsUpdated(false)
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}
const deleteTodo =(_id,setToDo)=>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}
export{getAllToDo,addToDo,updateTodo,deleteTodo}
