import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name:'',
  avatar:''
};

export const activateSlice = createSlice({
  name: "activate",
  initialState,
  reducers: {
    setName: (state, action) => {
      const  = action.payload;
      state.user = user;
      state.isAuth = true;
    },
    setAvatar: (state, action) => {
      const { phone, hash } = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    },
  },
});

export const { setAuth, setOtp } = authSlice.actions;

export default authSlice.reducer;
