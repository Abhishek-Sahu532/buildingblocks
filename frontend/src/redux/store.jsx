import { configureStore } from '@reduxjs/toolkit';
import AgentSlices from './Slices/AgentSlices';
import HouseOwnerSlices from './Slices/HouseOwnerSlices';
import AuthSlices from './Slices/AuthSlices';

const store = configureStore({
  reducer: {
    agent: AgentSlices,
    houseOwner: HouseOwnerSlices,
    auth: AuthSlices
  },
  devTools: true
});

export default store;
