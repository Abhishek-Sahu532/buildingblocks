import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  loading: false,
  success: false,
  registrationSuccess: false,
  signInSuccess: false,
  registrationError: false,
  signInError: false,
  message: '',
  agentDetails: {}
};

const AgentSlices = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    registerAgentRequest: (state) => {
      state.loading = true;
      state.registrationError = null;
    },
    registerAgentSuccess: (state, action) => {
      state.loading = false;
      state.registrationSuccess = true;
      state.message = action.payload.message;
      state.registrationError = null;
    },
    registerAgentFail: (state, action) => {
      state.loading = false;
      state.registrationSuccess = false;
      state.registrationError = action.payload;
    },
    agentSignInRequest: (state) => {
      state.loading = true;
      state.signInSuccess = false;
      state.signInError = null;
    },
    agentSignInSuccess: (state, action) => {
      state.loading = false;
      state.signInSuccess = true;
      state.signInError = null;
      state.agentDetails = action.payload;
    },
    agentSignInFailure: (state, action) => {
      state.loading = false;
      state.agentDetails = {};
      state.signInError = action.payload;
    }
  }
});

export const {
  registerAgentRequest,
  registerAgentSuccess,
  registerAgentFail,
  agentSignInSuccess,
  agentSignInFailure,
  agentSignInRequest
} = AgentSlices.actions;

export default AgentSlices.reducer;
