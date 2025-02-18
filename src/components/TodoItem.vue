<template>
  <li>
    <!-- 체크박스: 완료 상태를 변경 -->
    <input type="checkbox" :checked="todo.completed" @change="$emit('toggle-todo', todo.id)" />
    
    <!-- 수정 모드가 아닐 때 (기본 상태) -->
    <span v-if="!isEditing" :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
      {{ todo.text }} ({{ todo.dueDate || '마감기한 없음' }})
      <!-- 완료된 할 일은 취소선 표시, 마감기한이 없으면 '마감기한 없음' 출력 -->
    </span>
    
    <!-- 수정 모드일 때 -->
    <input v-else v-model="editText" @keyup.enter="saveEdit" />
    <!-- 사용자가 Enter 키를 누르면 수정 내용 저장 -->
    
    <!-- 수정 버튼 -->
    <button v-if="!isEditing" @click="isEditing = true">수정</button>
    <!-- 수정 모드가 아닐 때만 표시 -->
    <button v-else @click="saveEdit">저장</button>
    <!-- 수정 모드일 때만 표시 -->

    <!-- 삭제 버튼 -->
    <button @click="$emit('remove-todo', todo.id)">삭제</button>
    <!-- 클릭 시 remove-todo 이벤트를 부모 컴포넌트로 전달 -->
  </li>
</template>

<script>
import { ref } from 'vue'; // Vue의 반응형 변수를 사용하기 위해 ref 가져오기

export default {
  props: {
    todo: Object // 부모 컴포넌트에서 전달받은 todo 객체
  },
  setup(props, { emit }) {
    // props: 부모에서 전달된 데이터 (읽기 전용)
    // emit: 부모 컴포넌트로 이벤트 전달

    const isEditing = ref(false); // 수정 모드 여부를 저장하는 반응형 변수
    const editText = ref(props.todo.text); // 수정 중인 할 일 내용을 저장하는 변수

    // 수정 네용을 저장하는 함수
    const saveEdit = () => {
      emit('edit-todo', props.todo.id, editText.value);
      // 부모 컴포넌트로 edit-todo 이벤트를 전달하여 할 일 내용 업데이트
      isEditing.value = false; // 수정 모드 종료
    };

    return { isEditing, editText, saveEdit }; // 템플릿에서 사용할 변수 및 함수 반환환
  }
};
</script>
