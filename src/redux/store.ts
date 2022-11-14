import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import fetchCreditSlice from './fetchCreditSlice';

export const store = configureStore({
  reducer: { fetchCreditSlice },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
