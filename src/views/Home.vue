<template>
  <AddTodo @add-todo="addTodo" />
  <TodoList 
    :todos="todos" 
    @remove-todo="removeTodo" 
    @toggle-todo="toggleTodo" 
    @update-todos="updateTodos"  
  />
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';

export default {
  components: { AddTodo, TodoList },
  setup() {
    const todos = ref([]);

    // 로컬 스토리지에서 데이터 가져오기
    onMounted(() => {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
      }
    });

    // todos가 변경될 때마다 로컬 스토리지 업데이트
    watch(todos, (newTodos) => {
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }, { deep: true });

    // 할 일 추가
    const addTodo = (todo) => {
      todos.value.push({ id: Date.now(), ...todo, completed: false });
    };

    // 할 일 삭제
    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };

    // 완료 상태 변경
    const toggleTodo = (id) => {
      const todo = todos.value.find(todo => todo.id === id);
      if (todo) todo.completed = !todo.completed;
    };

    // ✨ 수정 기능 추가 ✨
    const updateTodos = (updatedTodos) => {
      todos.value = updatedTodos;
    };

    return { todos, addTodo, removeTodo, toggleTodo, updateTodos };
  }
};
</script>
