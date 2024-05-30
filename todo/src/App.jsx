import  { useState, useEffect } from 'react';
import TaskList from './components/tasklist/TaskList';
import TaskForm from './components/taskform/TaskForm';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        task.id = Date.now();
        task.completed = false;
        setTasks([...tasks, task]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setTaskToEdit(null);
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
            <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                setTaskToEdit={setTaskToEdit}
            />
        </div>
    );
};

export default App;
