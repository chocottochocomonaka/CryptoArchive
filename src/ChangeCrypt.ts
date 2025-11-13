// 略称にあった正式名称を返す関数
// APIの使用の際はbtcなどにしないといけないが、supabaseのテーブル名がBitcoinArchiveなどなので、btc→Bitcoinにする必要性が出てきた

export const ChangeCrypt = async (currency: string): Promise<string> => {
  switch (currency) {
    case "btc":
      return "Bitcoin";
    case "eth":
      return "Ethereum";
    case "xrp":
      return "XRP";
    default:
      return "Unknown"; // これが重要！
  }
};
