<template>
    <div>
      <input v-model="newTodo" @keyup.enter="submitTodo" placeholder="할 일 입력" />
      <!-- 입력한 텍스트를 newTodo 변수에 양방향 바인딩함 -->
       <!-- Enter 키를 누르면 submitTodo() 함수 실행 입력값 처리 -->
      <button @click="submitTodo">추가</button>
      <!-- 클릭하면 함수 실행 -->
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  // ref은 반응형 변수를 생성하는 Vue 3의 기능임
  // newTodo - ref(''): newTodo는 입력된 할 일을 저장하는 변수이며, ref()를 사용하여 반응형으로 만듦
  
  export default {
    emits: ['add-todo'],
    // emit : 부모 컴퍼넌트에 이벤트를 발생시키기 위해 사용
    // add-todo 이벤트를 발생시켜서 입력된 할 일을 부모에게 전달할 수 있도록 설정
    setup(_, { emit }) {
        // setup은 Vue 3에서 Composition API를 사용할 때 실행되는 함수
        // emit은 부모 컴포넌트에게 이벤트를 보낼 수 있도록 해주는 함수
      const newTodo = ref('');
  
      const submitTodo = () => {
        if (newTodo.value.trim() === '') return;
        // 입력값이 비어 있으면 (trim() == '') 아무것도 하지 않고 종료
        emit('add-todo', newTodo.value);
        // add-todo 이벤트를 발생시켜서 입력된 할 일을 부모 컴포넌트로 전달
        newTodo.value = '';
        // 입력 필드를 비워줌(초기화)
      };
  
      return { newTodo, submitTodo };
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
  