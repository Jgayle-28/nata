import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  profile: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.isAuthenticated = Boolean(action.payload?.isAuthenticated)
      state.profile = action.payload?.profile ?? null
    },
    clearAuthState: (state) => {
      state.isAuthenticated = false
      state.profile = null
    },
  },
})

export const { setAuthState, clearAuthState } = authSlice.actions
export default authSlice.reducer
