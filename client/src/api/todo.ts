import { TodoListClient } from '../grpc/todo_grpc_web_pb';
import {
  AddTodoRequest,
  DefaultMutationResponse,
  GetTodosRequest,
  GetTodosResponse,
  RemoveTodoRequest,
  UpdateTodoRequest,
} from '../grpc/todo_pb';

const Service = new TodoListClient('http://localhost:8080');

export function getTodosQuery(): Promise<GetTodosResponse.AsObject> {
  return new Promise((resolve) => {
    const request = new GetTodosRequest();

    Service.getTodos(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        return resolve({ dataList: [] });
      }

      resolve({
        dataList: response.getDataList().map((item) => item.toObject()),
      });
    });
  });
}

export function addTodoMutation(
  variables: AddTodoRequest.AsObject
): Promise<DefaultMutationResponse.AsObject> {
  return new Promise((resolve) => {
    const request = new AddTodoRequest();

    request.setDescription(variables.description);

    Service.addTodo(request, {}, (err, response) => {
      if (err) {
        return resolve({
          success: false,
          message: err.message,
        });
      }

      resolve({
        success: response.getSuccess(),
        message: response.getMessage(),
      });
    });
  });
}

export function updateTodoMutation(
  variables: UpdateTodoRequest.AsObject
): Promise<DefaultMutationResponse.AsObject> {
  return new Promise((resolve) => {
    const request = new UpdateTodoRequest();

    request.setTodoId(variables.todoId);
    request.setDescription(variables.description);
    request.setStatus(variables.status);

    Service.updateTodo(request, {}, (err, response) => {
      if (err) {
        return resolve({
          success: false,
          message: err.message,
        });
      }

      resolve({
        success: response.getSuccess(),
        message: response.getMessage(),
      });
    });
  });
}

export function removeTodoMutation(
  variables: RemoveTodoRequest.AsObject
): Promise<DefaultMutationResponse.AsObject> {
  return new Promise((resolve) => {
    const request = new UpdateTodoRequest();

    request.setTodoId(variables.todoId);

    Service.removeTodo(request, {}, (err, response) => {
      if (err) {
        return resolve({
          success: false,
          message: err.message,
        });
      }

      resolve({
        success: response.getSuccess(),
        message: response.getMessage(),
      });
    });
  });
}
