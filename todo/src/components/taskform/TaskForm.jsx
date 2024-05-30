import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const TaskForm = ({ addTask, editTask, taskToEdit }) => {
    const [task, setTask] = useState({ name: '', description: '' });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        } else {
            setTask({ name: '', description: '' });
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.name && task.description) {
            taskToEdit ? editTask(task) : addTask(task);
            setTask({ name: '', description: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Task Name"
                value={task.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Task Description"
                value={task.description}
                onChange={handleChange}
                required
            />
            <button type="submit">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
        </form>
    );
};
TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    taskToEdit: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string
    })
};

export default TaskForm;
