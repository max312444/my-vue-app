// 이 코드는 입력한 할 일을 배열에 추가하는 코드이다.
import { reactive } from 'vue'; // Vue의 반응형 상태 관리를 위한 reactive 가져오기

// 할 일 관리(추가/삭제) 기능을 제공하는 Store 역할
export const useTodoStore = () => {
    // todos 리스트를 reactive()로 감싸서 반응형 데이터로 만듦
  const state = reactive({
    todos: [] // 초기 데이터 없이 빈 배열로 시작 (localStorage나 API 연동을 고려)
  });

  // 새로운 할 일 추가하는 함수
  const addTodo = (text) => {
    state.todos.push({ id: Date.now(), text, completed: false });
  };

  // 특정 할 일을 삭제하는 함수
  const removeTodo = (id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
  };

  // 상태(state)와 함수들을 반환하여 다른 컴포넌트에서 사용 가능하게 함
  return {
    state, // 반응형 todos 리스트
    addTodo, // 할 일 추가 함수
    removeTodo // 할 일 삭제 함수
  };
};
