import { atom } from "recoil";

const Online = atom({
  key: 'Bot.Online', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const State = atom({
  key: 'Bot.State',
  default: {
    name: "WEIVER",
    id: "WEIVER#2142",
    state: "Hello, I am WEIVER" as string
  }
})

const URL = atom({
  key: `Bot.url`,
  default: {
    invite: "https://discord.com/oauth2/authorize?client_id=1152529500689666088&permissions=268438528&scope=bot%20applications.commands",
    community: "https://discord.gg/n2sn6CSeXZ",
  }
})

export {Online, State, URL};