import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  loading: false,
  success: false,
  registrationSuccess: false,
  signInSuccess: false,
  error: null,
  message: '',
  agentDetails: {}
};

const AgentSlices = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    registerAgentRequest: (state) => {
      state.loading = true;
    },
    registerAgentSuccess: (state, action) => {
      state.loading = false;
      state.registrationSuccess = true  
      state.message = action.payload.message;
    },
    registerAgentFail: (state, action) => {
      state.loading = false;
      state.registrationSuccess = false;
      state.error = action.payload;
    },
    signInRequest: (state) => {
      state.loading = true;
      state.signInSuccess = false;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.signInSuccess = true;
      state.error = null;
      state.agentDetails = action.payload;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.agentDetails = {};
      state.error = action.payload;
    }
  }
});

export const {
  registerAgentRequest,
  registerAgentSuccess,
  registerAgentFail,
  signInSuccess,
  signInFailure,
  signInRequest
} = AgentSlices.actions;

export default AgentSlices.reducer;
