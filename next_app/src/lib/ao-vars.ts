import { connect, createDataItemSigner } from "@permaweb/aoconnect";

const AppVersion = "3.0.0";
export const AOModule = "1PdCJiXhNafpJbvC-sjxWTeNzbf9Q_RfUNs84GYoPm0";
export const AOScheduler = "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA";

const CommonTags = [
  { name: "App-Name", value: "BetterIDEa" },
  { name: "App-Version", value: AppVersion },
];

export async function spawnProcess(name?: string) {
  const ao = connect();

  const result = await ao.spawn({
    module: AOModule,
    scheduler: AOScheduler,
    tags: name ? [...CommonTags, { name: "Name", value: name }] : CommonTags,
    signer: createDataItemSigner(window.arweaveWallet),
  });

  return result;
}

export async function runLua(code: string, process: string) {
  const ao = connect();

  const message = await ao.message({
    process,
    data: code,
    signer: createDataItemSigner(window.arweaveWallet),
    tags: [...CommonTags, { name: "Action", value: "Eval" }],
  });

  const result = await ao.result({ process, message });
  // console.log(result);
  return result;
}

export async function getResults(process: string, cursor = "") {
  const ao = connect();

  const r = await ao.results({
    process,
    from: cursor,
    sort: "ASC",
    limit: 50,
  });

  if (r.edges.length > 0) {
    const newCursor = r.edges[r.edges.length - 1].cursor;
    const results = r.edges.map((e) => e.node);
    return { cursor: newCursor, results };
  } else {
    return { cursor, results: [] };
  }
}
