import * as proxmox from "../../sdk/nodejs";

const random = new proxmox.Random("my-random", { length: 24 });

export const output = random.result;