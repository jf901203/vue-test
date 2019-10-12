
const TODOS_KEY = 'todos_key'
export default {
  // 读取操作
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },
  // 写入操作
  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}


