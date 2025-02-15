<!--  -->
<template>
  <ul>
    <!-- 할 일 목록을 반복하여 TodoTtem 컴포넌트를 생성 -->
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      @remove-todo="$emit('remove-todo', todo.id)" 
      @toggle-todo="$emit('toggle-todo', todo.id)"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'; // 개별 할 일 컴포넌트 가져오기

export default {
  components: { TodoItem }, // TodoItem을 등록하여 사용 가능하게 함
  props: {
    todos: Array // 부모로부터 할 일 목록 (todos) 배열을 props로 받음음
  }
};
</script>
