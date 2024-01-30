import { atom } from "recoil";

export const AuthState = atom({
  key: "AuthState",
  default: undefined,
});

export const AdminState = atom({
  key: "AdminState",
  default: undefined,
});

export const UserState = atom({
  key: "UserState",
  default: {
    displayName: undefined,
    email: undefined,
    photoUrl: undefined,
    uid: undefined,
  },
});

// export const CustomNameState = atom({
//   key: "CustomNameState",
//   default: undefined,
// });

export const ThemeColor = atom({
  key: "ThemeColor",
  default: "#fff",
});
