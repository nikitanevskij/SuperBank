import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TCredit = {
  id: number;
  name: string;
  minAmount: string;
  maxAmount: string;
  minTerm: string;
  maxTerm: string;
  rate: string;
};

interface ICreditsState {
  credits: TCredit[];
}

const initialState: ICreditsState = {
  credits: [],
};

export const fetchGETCredit = createAsyncThunk('credit/fetchGETCredit', async () => {
  const { data } = await axios.get<TCredit[]>('http://localhost:3001/lists');
  console.log(data);
  return data;
});

export const fetchCreditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGETCredit.pending, (state, action) => {
      console.log('pending');
    });
    builder.addCase(fetchGETCredit.fulfilled, (state, action) => {
      console.log('fulfiled');
    });
    builder.addCase(fetchGETCredit.rejected, (state, action) => {
      console.log('error');
    });
  },
});

export const {} = fetchCreditSlice.actions;

export default fetchCreditSlice.reducer;
