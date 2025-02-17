<template>
  <ul>
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      @remove-todo="$emit('remove-todo', todo.id)" 
      @toggle-todo="$emit('toggle-todo', todo.id)"
      @edit-todo="handleEditTodo" 
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: { TodoItem },
  props: {
    todos: Array
  },
  emits: ['remove-todo', 'toggle-todo', 'update-todos'],  // update-todos 이벤트 추가
  setup(props, { emit }) {
    const handleEditTodo = (id, newText) => {
      const updatedTodos = props.todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
      emit('update-todos', updatedTodos);  // 부모에게 업데이트된 todos 전달
    };

    return { handleEditTodo };
  }
};
</script>
