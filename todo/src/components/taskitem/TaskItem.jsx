import PropTypes from 'prop-types';

const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div onClick={() => toggleComplete(task.id)}>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
            </div>
            <button onClick={() => setTaskToEdit(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};


TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    setTaskToEdit: PropTypes.func.isRequired
};

export default TaskItem;
