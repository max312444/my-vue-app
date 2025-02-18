<template>
  <div>
    <!-- 사용자가 입력할 수 있는 할 일 입력 필드 -->
    <input v-model="newTodo" @keyup.enter="submitTodo" placeholder="할 일 입력" />

    <!-- 마감기한을 선택할 수 있는 날짜 입력 필드 -->
    <input type="date" v-model="dueDate" />

    <!-- 추가 버튼 (클릭 시 submitTodo 실행)-->
    <button @click="submitTodo">추가</button>
  </div>
</template>

<script>
import { ref } from 'vue'; // Vue의 반응형 변수를 사용하기 위해 ref 가져오기

export default {
  emits: ['add-todo'], // 부모 컴포넌트에서 받을 이벤트 정의
  
  setup(_, { emit }) {
    // _ (props가 필요 없을 때 사용) | emit: 이벤트를 부모 컴포넌트로 전달하는 함수

    const newTodo = ref(''); // 사용자가 입력한 할 일 텍스트를 저장하는 반응형 변수 
    const dueDate = ref(''); // 마감기한을 저장하는 반응형 변수

    // 새로운 할 일을 추가하는 함수
    const submitTodo = () => {
      if (newTodo.value.trim() === '') return; // 빈 입력 방지

      // 부모 컴포넌트로 할 일과 마감기한 데이터 전달
      emit('add-todo', { text: newTodo.value, dueDate: dueDate.value });

      // 입력 필드 초기화
      newTodo.value = '';
      dueDate.value = '';
    };

    return { newTodo, dueDate, submitTodo }; // 템플릿에서 사용할 변수 및 함수 반환
  }
};
</script>

<style scoped>
input {
  padding: 5px; /* 입력 필드 패딩 */
  margin-right: 5px; /* 입력 필드 간격 */
}
button {
  padding: 5px 10px; /* 버튼 패딩 */
}
</style>
