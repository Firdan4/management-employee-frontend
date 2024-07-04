import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDataState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  token: string | null;
}

const initialState: UserDataState = {
  firstName: null,
  lastName: null,
  email: null,
  token: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<{
        email: string;
        token: string;
        firstName: string;
        lastName: string;
      }>
    ) => {
      const { email, firstName, lastName, token } = action.payload;
      state.email = email;
      state.token = token;
      state.firstName = firstName;
      state.lastName = lastName;

      localStorage.setItem(
        "userData",
        JSON.stringify({
          token,
          firstName,
          lastName,
          email,
        })
      );
    },
    clearUserData: (state) => {
      state.email = null;
      state.token = null;

      localStorage.removeItem("userData");
    },
  },
});

export const { setUserData, clearUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
