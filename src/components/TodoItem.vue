<!-- 이 코드는 할 일 항목에 대한 기능을 담당하는 컴포넌트이다. -->
<template>
  <li>
    <!-- 체크박스를 클릭하면 'toggler-todo' 이벤트를 부모 컴포넌트로 전달-->
    <input type="checkbox" :checked="todo.completed" @change="$emit('toggle-todo', todo.id)" />
    <!-- 완료된 할 일은 취소선 적용 -->
    <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">{{ todo.text }}</span>
    <!-- 삭제 버튼 클릭 시 'remove-todo' 이벤트를 부모 컴포넌트로 전달-->
    <button @click="$emit('remove-todo', todo.id)">삭제</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object // 부모로부터 'todo' 객체를 props로 받음
  }
};
</script>
