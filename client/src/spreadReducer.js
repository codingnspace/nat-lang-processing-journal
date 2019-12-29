import { createSlice } from '@reduxjs/toolkit'
const spreadsSlice = createSlice({
  name: 'spreads',
  initialState: [],
  reducers: {
    addBookLog(state, action) {
        console.log(action)
      state.push(action.payload)
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})
export const { addBookLog, toggleTodo } = spreadsSlice.actions
export default spreadsSlice.reducer