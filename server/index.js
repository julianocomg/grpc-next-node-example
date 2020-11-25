const loadProtoFile = require('@grpc/proto-loader').loadSync;
const {
  loadPackageDefinition,
  ServerCredentials,
  Server,
} = require('@grpc/grpc-js');

const TodoService = require('./service');

const TodoProto = loadPackageDefinition(
  loadProtoFile('../protos/todo.proto', { keepCase: true })
);

function main() {
  var server = new Server();

  server.addService(TodoProto.todo.TodoList.service, TodoService.default);

  server.bindAsync('0.0.0.0:9090', ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('gRPC TodoList server running at 127.0.0.1:9090');
  });
}

main();
