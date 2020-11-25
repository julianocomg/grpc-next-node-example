import * as grpcWeb from 'grpc-web';

import * as todo_pb from './todo_pb';


export class TodoListClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTodos(
    request: todo_pb.GetTodosRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: todo_pb.GetTodosResponse) => void
  ): grpcWeb.ClientReadableStream<todo_pb.GetTodosResponse>;

  addTodo(
    request: todo_pb.AddTodoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: todo_pb.DefaultMutationResponse) => void
  ): grpcWeb.ClientReadableStream<todo_pb.DefaultMutationResponse>;

  updateTodo(
    request: todo_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: todo_pb.DefaultMutationResponse) => void
  ): grpcWeb.ClientReadableStream<todo_pb.DefaultMutationResponse>;

  removeTodo(
    request: todo_pb.RemoveTodoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: todo_pb.DefaultMutationResponse) => void
  ): grpcWeb.ClientReadableStream<todo_pb.DefaultMutationResponse>;

}

export class TodoListPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTodos(
    request: todo_pb.GetTodosRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<todo_pb.GetTodosResponse>;

  addTodo(
    request: todo_pb.AddTodoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<todo_pb.DefaultMutationResponse>;

  updateTodo(
    request: todo_pb.UpdateTodoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<todo_pb.DefaultMutationResponse>;

  removeTodo(
    request: todo_pb.RemoveTodoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<todo_pb.DefaultMutationResponse>;

}

