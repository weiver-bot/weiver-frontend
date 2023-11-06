import { atom } from "recoil";

export const AccessToken = atom({
  key: 'AccessToken',
  default: ""
})

export const User = atom<{
  id: string,
  avatar: string,
}|undefined>({
  key: 'UserData',
  default: undefined
})