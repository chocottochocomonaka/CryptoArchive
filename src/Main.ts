import WebSocket from "ws";
import { Archive } from "./Archive";
import { ChangeCrypt } from "./ChangeCrypt";

async function connect(currency: string) {
  const socket = new WebSocket("wss://ws-api.coincheck.com");

  socket.on("open", () => {
    console.log(`${currency}: 接続完了`);
    socket.send(
      JSON.stringify({ type: "subscribe", channel: `${currency}_jpy-trades` })
    );
  });

  socket.on("message", async (data) => {
    try {
      const json = JSON.parse(data.toString());
      const timestamp = json[0][0];
      const rate = json[0][3];
      const volume = json[0][4];
      const order = json[0][5];

      console.log(`${currency}: ${rate}`);

      const crypto = await ChangeCrypt(currency);
      if (!crypto) throw new Error("無効な通貨名");
      await Archive(crypto, rate, volume, order, timestamp);
    } catch (error) {
      console.error(`${currency}でデータ取得時のエラー: ${error}`);
    }
  });

  socket.on("error", (error) => {
    console.error(`${currency}でエラーが発生: ${error}`);
  });

  socket.on("close", () => {
    console.log(`${currency}: 接続終了。再接続します...`);
    setTimeout(() => connect(currency), 1000); // 1秒後に再接続
  });
}

// 通貨ごとに接続
connect("btc");
connect("eth");
connect("xrp");
