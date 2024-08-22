import { toast } from "@/components/ui/use-toast";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  username: string;
  jwt: string;
};

type UserState = {
  user: User | null;
};

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  if (!user) return null;
  return JSON.parse(user);
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Login ------
    login: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      if (user.username === "demo user") {
        toast({
          title: "Login successful!",
          description: `Welcome guest user`,
        });
        return;
      }
      toast({
        title: "Login successful!",
        description: `Welcome ${user.username}`,
      });
    },
    // Logout ------
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
