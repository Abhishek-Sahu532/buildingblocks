import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  loading: false,
  success: false,
  error:null,
  registrationSuccess: false,
  signInSuccess: false,
  registrationError: false,
  signInError: false,
  message: '',
  signedInAgentDetails:{},
  agentDetails: {},
  agents:{}
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
      state.signedInAgentDetails = action.payload;
    },
    agentSignInFailure: (state, action) => {
      state.loading = false;
      state.signedInAgentDetails = {};
      state.signInError = action.payload;
    },
    getAllAgentRequest: (state)=>{
      state.loading = false;
      state.success = false;
      state.error = null;
    },
    getAllAgentSuccess: (state, action)=>{
      state.loading = false;
      state.agents = action.payload;
      state.success = true
    },
    getAllAgentFailure : (state,action)=>{
      state.loading = false;
      state.agents = {};
      state.success = false;
      state.error = action.payload
    }
  }
});

export const {
  registerAgentRequest,
  registerAgentSuccess,
  registerAgentFail,
  agentSignInSuccess,
  agentSignInFailure,
  agentSignInRequest,
  getAllAgentRequest,
  getAllAgentSuccess,
  getAllAgentFailure
} = AgentSlices.actions;

export default AgentSlices.reducer;
