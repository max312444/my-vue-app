<template>
  <ul>
    <!-- todos 배열을 반복하여 각 할 일을 TodoItem 컴포넌트로 랜더링 -->
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 

      @remove-todo="$emit('remove-todo', todo.id)" 
      @toggle-todo="$emit('toggle-todo', todo.id)"
      @edit-todo="handleEditTodo" 
    />
    <!-- todos 배열을 반복하여 각 항목을 랜더링 -->
     <!-- Vue의 효율적인 랜더링을 위해 고유한 key 값 지정 -->
      <!-- 개별 할 일(todo) 데이터를 TodoItem 컴포넌트로 전달 -->
       <!-- 자식 컴포넌트(TodoItem)에서 remove-todo 이벤트 발생 시, 부모(TodoList)로 전달 -->
        <!-- 완료 상태(toggle)를 변경하는 이벤트 전달 -->
         <!-- 할 일을 수정할 때 실행할 함수 호출 -->
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'; // 할 일 항목을 나타내는 TodoItem 컴포넌트 가져오기

export default {
  components: { TodoItem }, // TodoItem을 등록하여 사용 가능하게 함
  props: {
    todos: Array // 부모 컴포넌트에서 전달받는 todos 배열 (읽기 전용)
  },
  emits: ['remove-todo', 'toggle-todo', 'update-todos'],
  // 자식 컴포넌트에서 발생한 이벤트를 부모로 전달할 수 있도록 정의
  setup(props, { emit }) {
    // props : 부모에서 전달된 데이터 (읽기 전용)
    // emit : 이벤트를 부모에게 전달하는 함수

    // 할 일 수정 가능
    const handleEditTodo = (id, newText) => {
      const updatedTodos = props.todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
        // 해당 id의 할 일의 text 값을 newText로 변경
      );
      emit('update-todos', updatedTodos);
      // 변경된 todos 배열을 부모 컴포넌트로 전달하여 업데이트 반영
    };

    return { handleEditTodo }; // 템플릿에서 사용할 함수 반환
  }
};
</script>
