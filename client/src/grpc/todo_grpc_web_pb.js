/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todo = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoListClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoListPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.GetTodosRequest,
 *   !proto.todo.GetTodosResponse>}
 */
const methodDescriptor_TodoList_getTodos = new grpc.web.MethodDescriptor(
  '/todo.TodoList/getTodos',
  grpc.web.MethodType.UNARY,
  proto.todo.GetTodosRequest,
  proto.todo.GetTodosResponse,
  /**
   * @param {!proto.todo.GetTodosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.GetTodosResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.GetTodosRequest,
 *   !proto.todo.GetTodosResponse>}
 */
const methodInfo_TodoList_getTodos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.GetTodosResponse,
  /**
   * @param {!proto.todo.GetTodosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.GetTodosResponse.deserializeBinary
);


/**
 * @param {!proto.todo.GetTodosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.GetTodosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.GetTodosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoListClient.prototype.getTodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoList/getTodos',
      request,
      metadata || {},
      methodDescriptor_TodoList_getTodos,
      callback);
};


/**
 * @param {!proto.todo.GetTodosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.GetTodosResponse>}
 *     Promise that resolves to the response
 */
proto.todo.TodoListPromiseClient.prototype.getTodos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoList/getTodos',
      request,
      metadata || {},
      methodDescriptor_TodoList_getTodos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.AddTodoRequest,
 *   !proto.todo.DefaultMutationResponse>}
 */
const methodDescriptor_TodoList_addTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoList/addTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.AddTodoRequest,
  proto.todo.DefaultMutationResponse,
  /**
   * @param {!proto.todo.AddTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.DefaultMutationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.AddTodoRequest,
 *   !proto.todo.DefaultMutationResponse>}
 */
const methodInfo_TodoList_addTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.DefaultMutationResponse,
  /**
   * @param {!proto.todo.AddTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.DefaultMutationResponse.deserializeBinary
);


/**
 * @param {!proto.todo.AddTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.DefaultMutationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.DefaultMutationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoListClient.prototype.addTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoList/addTodo',
      request,
      metadata || {},
      methodDescriptor_TodoList_addTodo,
      callback);
};


/**
 * @param {!proto.todo.AddTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.DefaultMutationResponse>}
 *     Promise that resolves to the response
 */
proto.todo.TodoListPromiseClient.prototype.addTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoList/addTodo',
      request,
      metadata || {},
      methodDescriptor_TodoList_addTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.UpdateTodoRequest,
 *   !proto.todo.DefaultMutationResponse>}
 */
const methodDescriptor_TodoList_updateTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoList/updateTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.UpdateTodoRequest,
  proto.todo.DefaultMutationResponse,
  /**
   * @param {!proto.todo.UpdateTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.DefaultMutationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.UpdateTodoRequest,
 *   !proto.todo.DefaultMutationResponse>}
 */
const methodInfo_TodoList_updateTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.DefaultMutationResponse,
  /**
   * @param {!proto.todo.UpdateTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.DefaultMutationResponse.deserializeBinary
);


/**
 * @param {!proto.todo.UpdateTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.DefaultMutationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.DefaultMutationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoListClient.prototype.updateTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoList/updateTodo',
      request,
      metadata || {},
      methodDescriptor_TodoList_updateTodo,
      callback);
};


/**
 * @param {!proto.todo.UpdateTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.DefaultMutationResponse>}
 *     Promise that resolves to the response
 */
proto.todo.TodoListPromiseClient.prototype.updateTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoList/updateTodo',
      request,
      metadata || {},
      methodDescriptor_TodoList_updateTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.RemoveTodoRequest,
 *   !proto.todo.DefaultMutationResponse>}
 */
const methodDescriptor_TodoList_removeTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoList/removeTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.RemoveTodoRequest,
  proto.todo.DefaultMutationResponse,
  /**
   * @param {!proto.todo.RemoveTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.DefaultMutationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.RemoveTodoRequest,
 *   !proto.todo.DefaultMutationResponse>}
 */
const methodInfo_TodoList_removeTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.DefaultMutationResponse,
  /**
   * @param {!proto.todo.RemoveTodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.DefaultMutationResponse.deserializeBinary
);


/**
 * @param {!proto.todo.RemoveTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.DefaultMutationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.DefaultMutationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoListClient.prototype.removeTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoList/removeTodo',
      request,
      metadata || {},
      methodDescriptor_TodoList_removeTodo,
      callback);
};


/**
 * @param {!proto.todo.RemoveTodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.DefaultMutationResponse>}
 *     Promise that resolves to the response
 */
proto.todo.TodoListPromiseClient.prototype.removeTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoList/removeTodo',
      request,
      metadata || {},
      methodDescriptor_TodoList_removeTodo);
};


module.exports = proto.todo;

