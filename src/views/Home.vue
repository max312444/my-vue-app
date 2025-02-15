<!-- 이 코드는 사용자의 액션에 따라 함수를 실행하는, 함수 콜링 파트이다.-->
<template>
    <div>
      <h1>Todo List</h1>
      <!-- 할 일 추가 컴포넌트 -->
      <AddTodo @add-todo="addTodo" />
      <!-- 할 일 목록 컴포넌트 -->
      <TodoList :todos="todos" @remove-todo="removeTodo" @toggle-todo="toggleTodo" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import AddTodo from '../components/AddTodo.vue'; // 할 일 추가 컴포넌트
  import TodoList from '../components/TodoList.vue'; // 할 일 목록 컴포넌트
  
  export default {
    components: { AddTodo, TodoList },
    setup() {
      const todos = ref([]); // 할 일 목록을 저장하는 반응형 상태
  
      // 저장된 할 일을 불러오는 함수
      const loadTodos = () => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || []; // localStorage에서 데이터 가져오기
        todos.value = savedTodos; // todos 배열에 저장
      };
  
      // 현재 할 일 목록을 localStorage에 저장하는 함수
      const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos.value)); // localStorage에 JSON 형식으로 저장
      };
  
      // 새 할 일을 추가하는 함수
      const addTodo = (text) => {
        todos.value.push({ id: Date.now(), text, completed: false }); // 새로운 할 일 객체 추가
        saveTodos();
      };
  
      // 할 일을 삭제하는 함수
      const removeTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id); // 해당 ID의 할 일을 제외하고 리스트 갱신
        saveTodos(); // 변경된 목록 저장
      };
  
      // 할 일 완료 상태를 토글하는 함수
      const toggleTodo = (id) => {
        const todo = todos.value.find(todo => todo.id === id); // ID로 할 일 찾기
        if (todo) {
          todo.completed = !todo.completed; // 완료 상태 반전
          saveTodos(); // 변경된 목록 저장
        }
      };
  
      onMounted(loadTodos); // 컴포넌트가 마운트되면(localStorage에서) 기존 할 일 목록 불러오기
  
      return { todos, addTodo, removeTodo, toggleTodo }; // 템플릿에서 사용할 변수 및 함수 반환
    }
  };
  </script>
  