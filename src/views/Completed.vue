<!-- 이 코드는 완료된 할 일을 처리하여 필터링 해서 보여주는 코드이다. -->
<template>
    <div>
      <h1>Completed Todos</h1>
      <!-- 완료된 할 일 목록 표시 -->
      <TodoList :todos="completedTodos" @remove-todo="removeTodo" />
    </div>
  </template>
  
  <script>
  import { computed, ref, onMounted } from 'vue';
  import TodoList from '../components/TodoList.vue'; // 할 일 목록 컴포넌트 불러오기
  
  export default {
    components: { TodoList }, // 하위 컴포넌트 등록
    setup() {
      const todos = ref([]); // 모든 할 일을 저장하는 반응형 상태
  
      // localStorage에서 할 일 불러오는 함수
      const loadTodos = () => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.value = savedTodos; // localStorage에서 가져온 데이터를 todos에 저장
      };
  
      // localStorage에 저장하는 함수
      const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos.value));
      };
  
      // 특정 할 일을 삭제하는 함수
      const removeTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id); // 해당 ID를 가진 할 일 제거
        saveTodos(); // 변경된 데이터 저장
      };
  
      // 완료된 할 일만 필터링하는 계산된 속성
      const completedTodos = computed(() => todos.value.filter(todo => todo.completed));
  
      onMounted(loadTodos); // 컴포넌트가 마운트될 때 기존 할 일 목록 불러오기
  
      return { completedTodos, removeTodo };
    }
  };
  </script>
  