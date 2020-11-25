import { FunctionComponent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import styled, { createGlobalStyle } from 'styled-components';
import {
  addTodoMutation,
  getTodosQuery,
  updateTodoMutation,
  removeTodoMutation,
} from '../api/todo';
import { Todo, TodoStatus } from '../grpc/todo_pb';

export default function GRPCTodoList() {
  const [inputValue, setInputValue] = useState('');

  const todosQuery = useQuery('getTodos', getTodosQuery);
  const [addTodo] = useMutation(addTodoMutation);
  const [updateTodo] = useMutation(updateTodoMutation);
  const [removeTodo] = useMutation(removeTodoMutation);

  const todos = todosQuery.data?.dataList ?? [];

  const isFull = todos.length >= 5;

  async function onAddNewTodo() {
    await addTodo({ description: inputValue });

    setInputValue('');

    await todosQuery.refetch();
  }

  async function onSetTodoStatus(todo: Todo.AsObject, status: TodoStatus) {
    await updateTodo({
      todoId: todo.id,
      description: todo.description,
      status,
    });

    await todosQuery.refetch();
  }

  async function onRemoveTodo(todo: Todo.AsObject) {
    await removeTodo({ todoId: todo.id });

    await todosQuery.refetch();
  }

  return (
    <>
      <GlobalStyles />

      <Container>
        <Title>gRPC TodoList</Title>

        <Content>
          <Input
            type="text"
            placeholder={
              !isFull ? 'Type here and press enter' : 'Your todo list is full'
            }
            disabled={isFull}
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                onAddNewTodo();
              }
            }}
          />

          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onSetStatus={(status) => onSetTodoStatus(todo, status)}
              onRemove={() => onRemoveTodo(todo)}
            />
          ))}
        </Content>
      </Container>
    </>
  );
}

const TodoListItem: FunctionComponent<ITodoListItem> = ({
  todo,
  onSetStatus,
  onRemove,
}) => {
  const isDone = todo.status === TodoStatus.DONE;

  return (
    <TodoListItemContainer isDone={isDone}>
      <p>{todo.description}</p>

      <strong onClick={() => onRemove()}>Remove</strong>

      <input
        type="checkbox"
        checked={isDone ? true : false}
        onChange={(e: any) => {
          onSetStatus(e.target.checked ? TodoStatus.DONE : TodoStatus.TODO);
        }}
      />
    </TodoListItemContainer>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: rgb(240, 240, 240);
    font-family: Arial, Helvetica, sans-serif;
  }

  input::placeholder {
    color: rgba(0,0,0,0.2)
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 40px 0;
`;

const Content = styled.div`
  background: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 550px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  appearance: none;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  padding: 15px 0;
  font-size: 18px;
  width: 100%;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: black;
  }
`;

const TodoListItemContainer = styled.div<{ isDone: boolean }>`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 10px 0;

  strong {
    font-size: 12px;
    color: red;
    margin-right: 15px;
    display: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
    display: flex;
    flex: 1;
  }

  input {
    transform: scale(1.5);
  }

  ${({ isDone }) =>
    isDone &&
    `
    opacity: 0.5;

    p {
      text-decoration: line-through;
    }
  `}

  &:hover > strong {
    display: block;
  }
`;

interface ITodoListItem {
  todo: Todo.AsObject;
  onSetStatus: (status: TodoStatus) => void;
  onRemove: () => void;
}
