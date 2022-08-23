import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import Table from './components/Table';


export default function App() {
    

    const [todoText, setTodoText] = useState('');
    const [todoData, setTodoData] = useState([]);
    

    useEffect(() => {
        getTodo();
    },[])
    

    const getTodo = async() => {
        try {
            const payload = await fetch('http://localhost:3000/todo/get');
            const jsonData = await payload.json();
            setTodoData(jsonData)
        } catch(err) {
            console.log(err.message);
        }
    }


    const didWrite = (event) => {
        setTodoText(event.target.value);
    }


    const addNote = async (event) => {
        event.preventDefault()
        const data = {description: todoText}
        try {
            const payload = await fetch('http://localhost:3000/todo/create', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                  }
            });
            const jsonData = await payload.json();
            setTodoData((prev) => {
                return [jsonData, ...prev]
            });
            setTodoText('');
        } catch(err) {
            console.log(err.message);
        }
    }

    
    const deleteNote = async(id) => {
        try {
            await fetch(`http://localhost:3000/todo/delete/${id}`, {
                method: 'DELETE'
            });
        } catch(err) {
            console.log(err);
        }
    };


    const clickedDelete = (id) => {
        deleteNote(id);
        setTodoData((prev) => {
            return prev.filter(item => item.id !== id);
        });
    }


    const clickedSave = async(id, newText) => {
        const body = {description: newText};
        try {
            const newTodo = await fetch(`http://localhost:3000/todo/update/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            }) 
            const jsonData = await newTodo.json()
            setTodoData((prev) => {
                const new_data = [jsonData ,...prev];
                for (let i=1; i<new_data.length; i++) {
                    if (new_data[i].id === id) {
                        new_data.splice(i, 1)
                        break
                    }
                }
                return new_data;
                // const newData = prev.filter(todo => todo.id != id);
                // newData.unshift(jsonData);
                // return newData;
            });
        } catch(err) {
            console.log(err.message);
        }
    };



    return (
        <div className="main">
            <Navbar count={todoData.length}/>
            <TodoForm 
                didWrite={didWrite}
                fieldValue={todoText}
                clickedAdd={addNote}/>
            <Table todoData={todoData} clickedDelete={clickedDelete} clickedSave={clickedSave}/>
        </div>
    )
}