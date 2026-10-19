
function TaskCard({ task }) {
    return (
        <article className="task-card">
            <div className="task-card-top">
                <h3>{task.name}</h3>

                <span
                    className={`priority-badge ${task.priority.toLowerCase()}`}
                >
          {task.priority}
        </span>
            </div>

            <p className="task-due-date">
                Due date: {task.dueDate}
            </p>
        </article>
    );
}

export default TaskCard;
