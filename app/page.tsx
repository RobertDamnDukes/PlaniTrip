"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]); // I think this sets the variables to hold the value of a table row

  function listTodos() { // this is how we pull from our tables. pulls from Todo with the observe query, then subscribes to that table subset
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {  
    listTodos();
  }, []);

  function createTodo() {  // calls for the dialoge that gets a user input and sends it to the Todo table
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main>
      <div class="upper-navbar"></div>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
      </div>
    </main>
  );
}
