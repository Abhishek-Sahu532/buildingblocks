import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  loading: false,
  success: false,
  otpSuccess: false,
  signInSuccess: false,
  registrationError: null,
  signInError: null,
  error: null,
  otpError: null,
  message: '',
  ownerDetails: {}
};

const HouseOwnerSlices = createSlice({
  initialState,
  name: 'houseOwner',
  reducers: {
    houseOwnerRegistrationRequest: (state) => {
      state.loading = true;
      state.registrationError = null;
    },
    houseOwnerRegistrationSuccess: (state, action) => {
      state.loading = false;
      state.registrationError = null;
      state.success = true;
      state.message = action.payload;
    },
    houseOwnerRegistrationFail: (state, action) => {
      state.loading = false;
      state.success = false;
      state.registrationError = action.payload;
    },
    houseOwnerSignInRequest: (state) => {
      state.loading = true;
    },
    houseOwnerSignInSuccess: (state, action) => {
      state.loading = false;
      state.signInSuccess = true;
      state.message = action.payload.message;
      state.ownerDetails = {};
    },
    houseOwnerSignInFail: (state, action) => {
      state.loading = false;
      state.signInSuccess = false;
      state.message = '';
      state.signInError = action.payload;
    },
    ownerOtpSuccess: (state, action) => {
      state.loading = false;
      state.otpSuccess = true;
      state.ownerDetails = action.payload;
      state.otpError = null;
      state.message = action.payload.message;
    },
    ownerOtpFail: (state, action) => {
      state.loading = false;
      state.otpError = action.payload;
      state.otpSuccess = false;
    }
  }
});

export const {
  houseOwnerRegistrationRequest,
  houseOwnerRegistrationSuccess,
  houseOwnerRegistrationFail,
  houseOwnerSignInRequest,
  houseOwnerSignInSuccess,
  houseOwnerSignInFail,
  ownerOtpSuccess,
  ownerOtpFail
} = HouseOwnerSlices.actions;

export default HouseOwnerSlices.reducer;
