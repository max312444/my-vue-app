<!-- 이 코드는 페이지를 연결하는 링크 파트이다.-->
<template>
  <div>
    <nav>
      <!-- router-link: 페이지 이동을 위한 링크 -->
      <router-link to="/">Todo List</router-link> |
      <router-link to="/completed">Completed Todos</router-link>
    </nav>

    <!-- router-view: 현재 URL에 맞는 컴포넌트 표시 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App' // 컴포넌트 이름 지정 (Vue DevTools에서 확인 가능)
};
</script>

<style>
/* 내비게이션 스타일 */
nav {
  padding: 10px;
}
nav a {
  margin-right: 10px; /* 링크 간 여백 추가 */
}
</style>