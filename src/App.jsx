
import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("Medium");

    function handleSubmit(event) {
        event.preventDefault();

        if (!taskName.trim() || !dueDate) {
            return;
        }

        const newTask = {
            id: Date.now(),
            name: taskName.trim(),
            dueDate: dueDate,
            priority: priority,
        };

        setTasks([...tasks, newTask]);

        setTaskName("");
        setDueDate("");
        setPriority("Medium");
    }

    return (
        <main className="app-container">
            <header className="app-header">
                <p className="eyebrow">STAY ORGANIZED</p>
                <h1>My Task Manager</h1>
                <p>Plan your day.</p>
            </header>

            <div className="dashboard">
                <TaskForm
                    taskName={taskName}
                    setTaskName={setTaskName}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    priority={priority}
                    setPriority={setPriority}
                    handleSubmit={handleSubmit}
                />

                <TaskList tasks={tasks} />
            </div>
        </main>
    );
}

export default App;
