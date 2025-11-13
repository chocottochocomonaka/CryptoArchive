// Main.ts側のSocketで取得したデータをその都度INSERTするためのコード

import { supabase } from "../supabase-client";

export const Archive = async (
  crypto: string,
  rate: number,
  volume: number,
  order: string,
  timestamp: number
) => {
  // UNIXタイム → ISO日時文字列
  const isoTime = new Date(timestamp * 1000).toISOString();

  const { error } = await supabase.from(`${crypto}Archive`).insert([
    {
      rate,
      volume,
      order,
      api_timestamp: isoTime, // ← ISO文字列で保存
    },
  ]);

  if (error) {
    console.error(error);
  }
};
