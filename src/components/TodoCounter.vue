<template>
    <div class="todo-counter">
        <h2> 할 일 목록 가져오기 </h2>
        <p>현재 카운트: <strong>{{ count }}</strong></p>

        <button @click="fetchNextTodo">다음 할 일 가져오기</button>

        <div v-if="todo">
            <h3>할 일 {{ count }}:</h3>
            <p>{{ todo.title }}</p>
        </div>

        <p v-else>아직 할 일이 없습니다. 버튼을 눌러보세요!</p>
    </div>
</template>

<script>
import axios from "axios"; // ✅ axios를 import 후 사용하도록 수정

export default {
  name: "TodoCounter",
  data() {
    return {
      count: 1,
      todo: null
    };
  },
  methods: {
    async fetchNextTodo() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${this.count}`);
        this.todo = response.data;
        this.count++;
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    }
  }
};
</script>


<style scoped>
.todo-counter {
  text-align: center;
  margin-top: 20px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
}

button:hover {
  background-color: #36936a;
}

h3 {
  margin-top: 10px;
}

p {
  font-size: 18px;
}
</style>