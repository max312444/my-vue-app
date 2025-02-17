<template>
  <div>
    <h1>Completed Todos</h1>
    <TodoList :todos="completedTodos" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import TodoList from '../components/TodoList.vue';

export default {
  components: { TodoList },
  setup() {
    const todos = ref([]);

    const loadTodos = () => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.value = savedTodos;
    };

    const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos.value));
    };

    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
      saveTodos();
    };

    const completedTodos = computed(() =>
      todos.value.filter(todo => todo.completed).map(todo => ({
        ...todo,
        displayText: `${todo.text} (마감기한: ${todo.dueDate || '없음'})`
      }))
    );

    onMounted(loadTodos);

    return { completedTodos, removeTodo };
  }
};
</script>
