import {useState} from 'react';
import {Header} from '../component/Header/Header'
import {Button} from "../component/Button/Button";
import {Input} from "../component/Input/Input";
import TaskList from "../component/TaskList/TaskList";

export const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: 101,
            name: 'aaa'
        },
        {
            id: 102,
            name: 'baa'
        },
        {
            id: 103,
            name: 'caa'
        }
    ]);
    const [name, setName] = useState('');

    const createTodo = (e) => {
        let id = Math.random().toFixed();
        const newTodos = [...todos, {id, name}];
        setTodos(newTodos);
    }

    return (
        <div>
            <Header/>
            <form>
                <label style={{padding: '50px 50px'}}> Name: </label>
                <Input
                    size="medium"
                    placeholder='Enter todo item'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Button
                    label='Create Todo'
                    type="submit"
                    onClick={createTodo}
                />
            </form>
            {todos && <TaskList false tasks={todos}/>}
        </div>
    );
}