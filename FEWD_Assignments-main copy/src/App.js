import React, { useState, useEffect } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { CheckCircle, Trash2 } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input, completed: false }, ...tasks]);
    setInput("");
  };

  const toggleComplete = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        className="p-4 shadow-lg"
        style={{
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "15px",
          backdropFilter: "blur(8px)",
        }}
      >
        <h2 className="text-center mb-4 text-success">🌱 To-Do Planner</h2>

        <Form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            placeholder="What do you need to do?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="me-2 shadow-sm"
          />
          <Button variant="success" onClick={addTask}>
            Add
          </Button>
        </Form>

        <ListGroup>
          {tasks.map((task) => (
            <ListGroup.Item
              key={task.id}
              className="d-flex justify-content-between align-items-center shadow-sm mb-2"
              style={{
                background: task.completed ? "#d1fae5" : "#fff",
                textDecoration: task.completed ? "line-through" : "none",
                borderRadius: "10px",
              }}
            >
              <span>{task.text}</span>
              <div className="d-flex gap-2">
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => toggleComplete(task.id)}
                >
                  <CheckCircle size={16} />
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {tasks.length === 0 && (
          <p className="text-center text-muted mt-3">No tasks yet. Add some! 🌿</p>
        )}
      </Container>
    </div>
  );
};

export default ToDoApp;
