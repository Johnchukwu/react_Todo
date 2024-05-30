import PropTypes from 'prop-types';
import TaskItem from '../taskitem/TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask, setTaskToEdit }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    setTaskToEdit={setTaskToEdit}
                />
            ))}
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    setTaskToEdit: PropTypes.func.isRequired
};


export default TaskList;
