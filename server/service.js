var TODOS = [];

function addTodo(call, cb) {
  const { description } = call.request;

  if (!description) {
    return cb(null, { ok: false, message: 'Invalid description!' });
  }

  TODOS.push({
    id: generateUniqueId(),
    status: 0,
    description,
  });

  cb(null, { ok: true, message: 'Todo added successfully!' });
}

function getTodos(_, cb) {
  cb(null, { data: TODOS });
}

function updateTodo(call, cb) {
  const { todo_id, status, description } = call.request;

  if (!todoExists(todo_id)) {
    return cb(null, { ok: false, message: 'Todo not found.' });
  }

  TODOS = TODOS.map((todo) => {
    if (todo.id === todo_id) {
      todo = {
        ...todo,
        description,
        status,
      };
    }

    return todo;
  });

  cb(null, { ok: true, message: 'Todo updated successfully!' });
}

function removeTodo(call, cb) {
  const { todo_id } = call.request;

  if (!todoExists(todo_id)) {
    return cb(null, { ok: false, message: 'Todo not found.' });
  }

  TODOS = TODOS.filter((todo) => todo.id !== todo_id);

  cb(null, { ok: true, message: 'Todo removed successfully!' });
}

function todoExists(todoId) {
  return !!TODOS.find((todo) => todo.id === todoId);
}

function generateUniqueId() {
  return Math.random().toString(16).slice(2);
}

exports['default'] = {
  addTodo,
  getTodos,
  updateTodo,
  removeTodo,
};
