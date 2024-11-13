import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
  coinDenom: "AEXCG",
  name: "Andro Exchange",
  banner:
    "https://crowf.infura-ipfs.io/ipfs/QmXpSQ5pTTSES8k5zP6AL6uPZo8myhTvV8U8DgZMj8a8TF",
  chainId: "galileo-4",
  createdDate: "2024-03-31T19:01:01.148Z",
  modifiedDate: "2024-03-31T19:01:01.148Z",
  id: "andromeda",
  collections: [
    {
      exchange:
        "andr1ypdz3r9fa24t6dz7xqunwm3v6qtyg064mvexzey3vwzhdh4g922sd9pktk",
      cw20: "andr1fkaqr3a0gu8htyka0s32l3u5w4k2t2she60tnujy43euq0nh6cqsacvm9c",
      name: "Andro Exchange",
      type: ICollectionType.EXCHANGE,
      id: "embeddables-exchange-1",
    },
  ],
};

export default CONFIG;
