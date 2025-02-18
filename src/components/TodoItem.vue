<template>
  <li>
    
    <input type="checkbox" :checked="todo.completed" @change="$emit('toggle-todo', todo.id)" />
    
    <!-- 수정 모드가 아닐 때 -->
    <span v-if="!isEditing" :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
      {{ todo.text }} ({{ todo.dueDate || '마감기한 없음' }})
    </span>
    
    <!-- 수정 모드일 때 -->
    <input v-else v-model="editText" @keyup.enter="saveEdit" />
    
    <button v-if="!isEditing" @click="isEditing = true">수정</button>
    <button v-else @click="saveEdit">저장</button>
    <button @click="$emit('remove-todo', todo.id)">삭제</button>
  </li>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    todo: Object
  },
  setup(props, { emit }) {
    const isEditing = ref(false);
    const editText = ref(props.todo.text);

    const saveEdit = () => {
      emit('edit-todo', props.todo.id, editText.value);
      isEditing.value = false;
    };

    return { isEditing, editText, saveEdit };
  }
};
</script>
