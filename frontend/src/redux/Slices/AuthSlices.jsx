import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  loading: false,
  message: '',
  error: null,
  success: false,
  userDetails: null
};

const AuthSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.userDetails = action.payload;
    },
    fetchUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFail } = AuthSlices.actions;

export default AuthSlices.reducer;
