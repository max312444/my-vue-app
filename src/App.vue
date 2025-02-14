<template>
  <div class="container">
    <h1>🚀 Vue 사용자 입력 처리</h1>
    <p>현재 카운트: <strong>{{ count }}</strong></p>

    <!-- 사용자가 입력한 숫자를 바인딩 & Enter 키 입력 시 증가 -->
    <input
      type="number"
      v-model="inputNumber"
      placeholder="증가할 숫자 입력"
      @keydown.enter="increaseByInput"
    />

    <!-- 버튼 클릭 시 실행 -->
    <button @click="increaseByInput">입력값만큼 증가</button>

    <button @click="resetCount">초기화</button>
  </div>
</template>

<script>
export default {
  name: "CounterApp",
  data() {
    return {
      count: 0,
      inputNumber: 1, // 기본값 1
    };
  },
  methods: {
    // 🔹 사용자가 입력한 값만큼 증가
    increaseByInput() {
      this.count += Number(this.inputNumber);
    },
    // 🔹 초기화 버튼
    resetCount() {
      this.inputNumber = 1;
      this.count = 0;
    },
  },
};
</script>

<style>
/* 🔹 스타일 */
.container {
  text-align: center;
  margin-top: 50px;
}

input {
  width: 150px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
  margin-right: 10px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 10px;
}

button:hover {
  background-color: #36936a;
}
</style>
