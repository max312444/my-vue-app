<template>
  <div>
    <h1>Completed Todos</h1> <!-- 완료된 할 일 목록을 표시하는 제목 -->
    <TodoList :todos="completedTodos" @remove-todo="removeTodo" />
    <!-- 완료된 할 일 목록을 TodoList 컴포넌트에 전달 -->
     <!-- removeTodo 이벤트를 받아 삭제 기능 수행 -->
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'; // Vue의 Composition API에서 필요한 기능 가져오기
import TodoList from '../components/TodoList.vue'; // 할 일 목록 컴포넌트 가져오기

export default {
  components: { TodoList }, // TodoList 컴포넌트를 등록하여 사용 가능하게 함
  setup() {
    const todos = ref([]); // 반응형 변수로 할 일 목록을 저장

    // 로컬 스토리지에서 할 일 목록을 불러오는 함수
    const loadTodos = () => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || []; // 저장된 할 일이 없으면 빈 배열 반환
      todos.value = savedTodos; // 가져온 데이터를 todos에 저장
    };

    // 할 일 목록을 로컬 스토리지에 저장하는 함수
    const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos.value)); // todos 데이터를 JSON 형식으로 변환하여 저장
    };

    // 특정 id가 가진 할 일을 삭제하는 함수
    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id); // id가 일치하지 않는 할 일만 남김 (삭제 수행)
      saveTodos(); // 변경된 할 일 목록을 다시 로컬 스토리지에 저장
    };

    // 완료된 할 일 목록을 필터링하여 computed 속성으로 정의
    const completedTodos = computed(() =>
      todos.value.filter(todo => todo.completed).map(todo => ({ // completed가 true인 할 일만 필터링
        ...todo, // 각 할 일에 추가적인 표시 정보 포함
        displayText: `${todo.text} (마감기한: ${todo.dueDate || '없음'})`
        // 마감기한이 있으면 표시, 없으면 '없음'으로 설정
      }))
    );

    // 컴포넌트가 마운트될 때 로컬 스토리지에서 데이터를 불러옴
    onMounted(loadTodos);

    return { completedTodos, removeTodo }; // 템플릿에서 사용할 데이터 및 함수 반환
  }
};
</script>
