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



    return (
        <div className="main">
            <Navbar count={todoData.length}/>
            <TodoForm 
                didWrite={didWrite}
                fieldValue={todoText}
                clickedAdd={addNote}/>
            <Table todoData={todoData} clickedDelete={clickedDelete} />
        </div>
    )
}