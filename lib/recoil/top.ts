import { atom } from "recoil";

export const AniFrom = atom<[number, number, boolean]|undefined>({
  key: 'Top.AniFrom',
  default: undefined
});
