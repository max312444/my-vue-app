// 이 코드는 초기 설정 및 파일 가져오는 파트이다.
import { createApp } from 'vue'; // Vue 3의 애플리케이션을 생성하는 함수 import
import App from './App.vue'; // 최상위 컴포넌트(App.vue) import
import router from './router'; // Vue Router 설정 가져옴 (router가 정의된 파일)

const app = createApp(App); // Vue 애플리케이션 생성
app.use(router); // 애플리케이션에 Vue Router 사용 설정 (페이지 이동 가능하게 함)
app.mount('#app'); // ID가 'app'인 요소에 Vue 애플리케이션을 마운트 (실제 화면에 표시시)
