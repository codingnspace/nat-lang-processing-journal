import { createSlice } from '@reduxjs/toolkit'
const spreadsSlice = createSlice({
  name: 'spreads',
  initialState: [],
  reducers: {
    addSpread(state, action) {
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
export const { addSpread, toggleTodo } = spreadsSlice.actions
export default spreadsSlice.reducer