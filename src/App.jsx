import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";

export default function App() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    try {
      const incomingData = await fetch("https://jsonplaceholder.typicode.com/todos");
      const formatedData = await incomingData.json();
      setTodo(formatedData);
      console.log(formatedData);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className="my-5">
        <h1 className="my-5 text-center display-2">Todo List</h1>
        <Table striped bordered hover>
          <thread>
          <th>Title</th>
          <th>Completed</th>

          </thread>
          <tbody>
            {todos.map((todo, i) => (
              <tr key={todo.id}>
                <td>{i + 1}</td>
                <td className={todo.completed ? 'text-sucess': 'text-danger'}>
                {todo.title}</td>
                <td>{todo.completed ? 'yes' : 'no'}</td>
                
              </tr>
            ))}





          </tbody>
        </Table>
      </Container>
    </div>
  );
}







