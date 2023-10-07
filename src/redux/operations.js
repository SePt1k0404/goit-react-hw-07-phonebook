import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65215439a4199548356d0fc4.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async signal => {
    const response = await axios.get('/contacts', { signal });
    return response.data;
  }
);
