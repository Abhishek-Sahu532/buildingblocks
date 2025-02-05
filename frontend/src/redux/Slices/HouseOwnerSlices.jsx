import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  loading: false,
  success: false,
  error: null,
  message: '',
  ownerDetails: {}
};

const HouseOwnerSlices = createSlice({
  initialState,
  name: 'houseOnwer',
  reducers: {
    houseOwnerRegistrationRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    houseOwnerRegistrationSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.message = action.payload;
    },
    houseOwnerRegistrationFail: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    houseOwnerSignUpRequest: (state) => {
      state.loading = true;
    },
    houseOwnerSignUpSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = action.payload;
      state.ownerDetails = action.payload;
    },
    houseOwnerSignUpFail: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    }
  }
});

export const {
  houseOwnerRegistrationRequest,
  houseOwnerRegistrationSuccess,
  houseOwnerRegistrationFail,
  houseOwnerSignUpRequest,
  houseOwnerSignUpSuccess,
  houseOwnerSignUpFail
} = HouseOwnerSlices.actions;

export default HouseOwnerSlices.reducer;
