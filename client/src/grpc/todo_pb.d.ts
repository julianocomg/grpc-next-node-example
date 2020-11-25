import * as jspb from 'google-protobuf'



export class Todo extends jspb.Message {
  getId(): string;
  setId(value: string): Todo;

  getStatus(): TodoStatus;
  setStatus(value: TodoStatus): Todo;

  getDescription(): string;
  setDescription(value: string): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    id: string,
    status: TodoStatus,
    description: string,
  }
}

export class GetTodosRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosRequest): GetTodosRequest.AsObject;
  static serializeBinaryToWriter(message: GetTodosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosRequest;
  static deserializeBinaryFromReader(message: GetTodosRequest, reader: jspb.BinaryReader): GetTodosRequest;
}

export namespace GetTodosRequest {
  export type AsObject = {
  }
}

export class GetTodosResponse extends jspb.Message {
  getDataList(): Array<Todo>;
  setDataList(value: Array<Todo>): GetTodosResponse;
  clearDataList(): GetTodosResponse;
  addData(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosResponse): GetTodosResponse.AsObject;
  static serializeBinaryToWriter(message: GetTodosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosResponse;
  static deserializeBinaryFromReader(message: GetTodosResponse, reader: jspb.BinaryReader): GetTodosResponse;
}

export namespace GetTodosResponse {
  export type AsObject = {
    dataList: Array<Todo.AsObject>,
  }
}

export class DefaultMutationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DefaultMutationResponse;

  getMessage(): string;
  setMessage(value: string): DefaultMutationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultMutationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultMutationResponse): DefaultMutationResponse.AsObject;
  static serializeBinaryToWriter(message: DefaultMutationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultMutationResponse;
  static deserializeBinaryFromReader(message: DefaultMutationResponse, reader: jspb.BinaryReader): DefaultMutationResponse;
}

export namespace DefaultMutationResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class AddTodoRequest extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): AddTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTodoRequest): AddTodoRequest.AsObject;
  static serializeBinaryToWriter(message: AddTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTodoRequest;
  static deserializeBinaryFromReader(message: AddTodoRequest, reader: jspb.BinaryReader): AddTodoRequest;
}

export namespace AddTodoRequest {
  export type AsObject = {
    description: string,
  }
}

export class UpdateTodoRequest extends jspb.Message {
  getTodoId(): string;
  setTodoId(value: string): UpdateTodoRequest;

  getStatus(): TodoStatus;
  setStatus(value: TodoStatus): UpdateTodoRequest;

  getDescription(): string;
  setDescription(value: string): UpdateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTodoRequest): UpdateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTodoRequest;
  static deserializeBinaryFromReader(message: UpdateTodoRequest, reader: jspb.BinaryReader): UpdateTodoRequest;
}

export namespace UpdateTodoRequest {
  export type AsObject = {
    todoId: string,
    status: TodoStatus,
    description: string,
  }
}

export class RemoveTodoRequest extends jspb.Message {
  getTodoId(): string;
  setTodoId(value: string): RemoveTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTodoRequest): RemoveTodoRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTodoRequest;
  static deserializeBinaryFromReader(message: RemoveTodoRequest, reader: jspb.BinaryReader): RemoveTodoRequest;
}

export namespace RemoveTodoRequest {
  export type AsObject = {
    todoId: string,
  }
}

export enum TodoStatus { 
  TODO = 0,
  DONE = 1,
}
