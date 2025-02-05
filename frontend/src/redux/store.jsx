import { configureStore } from '@reduxjs/toolkit';
import AgentSlices from './Slices/AgentSlices';
import HouseOwnerSlices from './Slices/HouseOwnerSlices';

const store = configureStore({
  reducer: {
    agent: AgentSlices,
    houseOnwer: HouseOwnerSlices
  },
  devTools: true
});

export default store;
