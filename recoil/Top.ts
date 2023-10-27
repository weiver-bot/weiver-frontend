import { atom } from "recoil";

const AniFrom = atom<[number, number, boolean]|undefined>({
  key: 'Top.AniFrom',
  default: undefined
});

export {AniFrom};