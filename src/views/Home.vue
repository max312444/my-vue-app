<template>
  <!-- 할 일 추가하는 입력 칸을 포함한 AddTodo 컴포넌트 -->
  <AddTodo @add-todo="addTodo" />
  <!-- 할 일 목록을 표시하는 TodoList 컴포넌트 -->
   <!-- 부모 컴포넌트에서 할 일 목록을 props로 전달 -->
    <!-- 할 일을 삭제하는 이벤트 리스너 -->
     <!-- 할 일 완료 여부를 변경하는 이벤트 리스너 -->
      <!-- 할 일 목록을 업데이트 하는 이벤트 리스너너-->
  <TodoList 
    :todos="todos" 
    @remove-todo="removeTodo" 
    @toggle-todo="toggleTodo" 
    @update-todos="updateTodos"  
  />
</template>

<script>
import { ref, onMounted, watch } from 'vue'; // Vue의 Composition API에서 필요한 기능 가져오기
import AddTodo from '../components/AddTodo.vue'; // 할 일 추가 컴포넌트 가져오기
import TodoList from '../components/TodoList.vue'; // 할 일 목록 표시 컴포넌트 가져오기

export default {
  components: { AddTodo, TodoList }, // 등록한 컴포넌트 사용 선언
  setup() {
    const todos = ref([]); // 반응형 변수로 할 일 목록을 저장

    // 컴포넌트가 마운트될 때 실행 (로컬 스토리지에서 데이터 불러오기)
    onMounted(() => {
      const savedTodos = localStorage.getItem('todos'); // 로컬 스토리지에서 'todos' 키의 데이터 가져오기기
      if (savedTodos) {
        todos.value = JSON.parse(savedTodos); // JSON 문자열을 객체 배열로 변환하여 todos에 저장
      }
    });

    // 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
    watch(todos, (newTodos) => {
      localStorage.setItem('todos', JSON.stringify(newTodos)); // 변경된 todo를 Json 문자열로 변환하여 저장
    }, { deep: true }); // 객체 내부 속성 변화도 감조하기 위해 deep 옵션 설정

    // 새로운 할 일 추가
    const addTodo = (todo) => {
      todos.value.push({ id: Date.now(), ...todo, completed: false });
      // 고유한 id(Date.now())를 부여하고 기본적으로 completed(완료 여부)는 false로 설정
    };

    // 특정 id를 가진 할 일을 삭제하는 함수
    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
      // filter를 사용하여 해당 id를 가진 할 일을 제외한 새로운 배열을 생성하여 할 일 목록을 업데이트
    };

    // 할 일 완료 여부를 토글하는 함수
    const toggleTodo = (id) => {
      const todo = todos.value.find(todo => todo.id === id); // id가 일치하는 할 일 찾기
      if (todo) todo.completed = !todo.completed; // 완료 여부 반전 (true <->  false)
    };

    //  할 일 목록을 업데이트하는 함수 (Drag & Drop 시 사용 가능)
    const updateTodos = (updatedTodos) => {
      todos.value = updatedTodos; // 변경된 할 일 목록을 반영
    };

    // setup 함수에서 사용할 변수와 함수 반환 (템플릿에서 사용 가능능)
    return { todos, addTodo, removeTodo, toggleTodo, updateTodos };
  }
};
</script>
