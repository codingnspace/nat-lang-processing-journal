import { createSlice } from '@reduxjs/toolkit'
const spreadsSlice = createSlice({
  name: 'spreads',
  initialState: {
    books: [],
    movies: [],
    gratitudes: [],
    brags: [],
    selfCareList: [],
    quotes: [],
    wants: [],
    goals: [],
    shopping: []
  },
  reducers: {
    addToSpread(state, action) {
        console.log(action)
      state[action.payload.type].push(action.payload.data)
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})
export const { addToSpread, toggleTodo } = spreadsSlice.actions
export default spreadsSlice.reducer