import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

export type TCredit = {
  id: number;
  name: string;
  minAmount: number;
  maxAmount: number;
  minTerm: number;
  maxTerm: number;
  rate: number;
};

interface ICreditsState {
  credits: TCredit[];
  selectedCredit: number | null;
  visibleCreateCredit: boolean;
  activeCredit: TCredit;
}

const initialState: ICreditsState = {
  credits: [],
  selectedCredit: null,
  visibleCreateCredit: true,
  activeCredit: {
    id: NaN,
    name: '',
    minAmount: NaN,
    maxAmount: NaN,
    minTerm: NaN,
    maxTerm: NaN,
    rate: NaN,
  },
};

export const fetchGETCredit = createAsyncThunk<TCredit[]>('credit/fetchGETCredit', async () => {
  const { data } = await axios.get<TCredit[]>('http://localhost:3001/lists');
  return data;
});

export const fetchADDCredit = createAsyncThunk('credit/fetchADDCredit', async (obj) => {
  const { data } = await axios.post<TCredit>('http://localhost:3001/lists', obj);

  return data;
});

export const fetchPATCHSelectedCredit = createAsyncThunk<any, any, { state: RootState }>(
  'credit/fetchPATCHSelectedCredit',
  async (obj, { getState }) => {
    const { fetchCreditSlice } = getState();
    const { selectedCredit } = fetchCreditSlice;
    const { data } = await axios.patch(`http://localhost:3001/lists/${selectedCredit}`, obj);

    return data;
  },
);

export const fetchCreditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    setSelectCredit: (state, action: PayloadAction<number>) => {
      state.selectedCredit = action.payload;
      state.activeCredit = state.credits.filter((item) => item.id === action.payload)[0];
      state.visibleCreateCredit = false;
    },
    setVisibleCreateCredit: (state, action: PayloadAction<boolean>) => {
      state.visibleCreateCredit = action.payload;
    },
    setActiveCredit: (state, action) => {
      state.activeCredit = {
        ...state.activeCredit,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGETCredit.fulfilled, (state, action) => {
      state.credits = action.payload;
    });

    builder.addCase(fetchADDCredit.fulfilled, (state, action) => {
      state.credits.push(action.payload);
    });

    builder.addCase(fetchPATCHSelectedCredit.fulfilled, (state, action) => {
      const result = state.credits.map((item) =>
        action.payload.id === item.id ? action.payload : item,
      );
      state.credits = result;
    });
  },
});
export const stateCredit = (state: RootState) => state.fetchCreditSlice;

export const { setSelectCredit, setVisibleCreateCredit, setActiveCredit } =
  fetchCreditSlice.actions;

export default fetchCreditSlice.reducer;
