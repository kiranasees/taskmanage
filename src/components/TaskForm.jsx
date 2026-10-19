
function TaskForm({
                      taskName,
                      setTaskName,
                      dueDate,
                      setDueDate,
                      priority,
                      setPriority,
                      handleSubmit,
                  }) {
    return (
        <section className="form-panel">
            <p className="section-label">NEW TASK</p>
            <h2>Add a task</h2>
            <p className="panel-description">
                Add something you want to do.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName">Task name</label>
                <input
                    id="taskName"
                    type="text"
                    placeholder="e.g. Finish React assignment"
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}
                    required
                />

                <label htmlFor="dueDate">Due date</label>
                <input
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                    required
                />

                <label htmlFor="priority">Priority</label>
                <select
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button type="submit" className="add-button">
                    + Add Task
                </button>
            </form>
        </section>
    );
}

export default TaskForm;
