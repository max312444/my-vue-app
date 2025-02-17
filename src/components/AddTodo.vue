<template>
  <div>
    <input v-model="newTodo" @keyup.enter="submitTodo" placeholder="할 일 입력" />
    <!-- 마감기한 입력 필드 추가 -->
    <input type="date" v-model="dueDate" />
    <button @click="submitTodo">추가</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['add-todo'],
  setup(_, { emit }) {
    const newTodo = ref('');
    const dueDate = ref(''); // 마감기한 저장

    const submitTodo = () => {
      if (newTodo.value.trim() === '') return;
      emit('add-todo', { text: newTodo.value, dueDate: dueDate.value });
      newTodo.value = '';
      dueDate.value = ''; // 입력 필드 초기화
    };

    return { newTodo, dueDate, submitTodo };
  }
};
</script>

<style scoped>
input {
  padding: 5px;
  margin-right: 5px;
}
button {
  padding: 5px 10px;
}
</style>
