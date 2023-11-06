import { atom } from "recoil";

export const Online = atom({
  key: 'Bot.Online', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const State = atom({
  key: 'Bot.State',
  default: {
    avg: 0,
    count: 0
  }
})

export const Info = atom({
  key: `Bot.Info`,
  default: {
    name: "WEIVER",
    id: "WEIVER#2142",
    URL: {
      invite: "https://discord.com/oauth2/authorize?client_id=1152529500689666088&permissions=268438528&scope=bot%20applications.commands",
      community: "https://discord.gg/n2sn6CSeXZ",
    }
  }
})
