// 이 코드는 라우트(URL과 해당 컴포넌트를 연결) 관련 코드이다. 
import { createRouter, createWebHistory } from 'vue-router'; // Vue Router 관련 기능 import
import Home from '../views/Home.vue'; // 홈 페이지 (전체 Todo 리스트) 컴포넌트 import
import Completed from '../views/Completed.vue'; // 완료된 Todo 리스트 컴포넌트 import

// 라우트 설정: URL과 컴포넌트 연결
const routes = [
  { path: '/', component: Home }, // '/' -> Home 컴포넌트 표시
  { path: '/completed', component: Completed } // '/completed' -> Completed 컴포넌트 표시
];

const router = createRouter({
  history: createWebHistory(), // 브라우저의 히스토리 모드 사용 (URL에 # 없이 깔끔하게 유지)
  routes
});

export default router; // 라우터 객체를 내보내서 Vue 어플리케이션에서 사용