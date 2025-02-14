<template>
  <div>
    <h1>🚀 Todo List </h1>
    
    <!-- TodoCounter 컴포넌트 사용 -->
     <TodoCounter />
  </div>
</template>

<script>
import TodoCounter from "./components/TodoCounter.vue";

export default {
  name: "App",
  components: {
    TodoCounter
  }
};
</script>

<style>
h1 {
  text-align: center;
}
</style>