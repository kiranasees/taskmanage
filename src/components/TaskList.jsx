
import TaskCard from "./TaskCard.jsx";

function TaskList({ tasks }) {
    return (
        <section className="list-panel">
            <div className="list-heading">
                <div>
                    <p className="section-label">YOUR PLANS</p>
                    <h2>My Tasks</h2>
                </div>

                <span className="task-count">{tasks.length}</span>
            </div>

            {tasks.length === 0 ? (
                <p className="empty-message">
                    No tasks yet. Add your first task!
                </p>
            ) : (
                <div className="task-list">
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default TaskList;
