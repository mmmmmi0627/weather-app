export interface JapanCity {
  ja: string;
  nameEn: string;
  lat: number;
  lon: number;
  region: string;
}

export const JAPAN_CITIES: JapanCity[] = [
  // 北海道
  { ja: "札幌市", nameEn: "Sapporo", lat: 43.0618, lon: 141.3545, region: "北海道" },
  { ja: "函館市", nameEn: "Hakodate", lat: 41.7686, lon: 140.7290, region: "北海道" },
  { ja: "旭川市", nameEn: "Asahikawa", lat: 43.7706, lon: 142.3651, region: "北海道" },
  { ja: "釧路市", nameEn: "Kushiro", lat: 42.9849, lon: 144.3820, region: "北海道" },
  // 東北
  { ja: "青森市", nameEn: "Aomori", lat: 40.8246, lon: 140.7401, region: "青森県" },
  { ja: "盛岡市", nameEn: "Morioka", lat: 39.7036, lon: 141.1527, region: "岩手県" },
  { ja: "仙台市", nameEn: "Sendai", lat: 38.2682, lon: 140.8694, region: "宮城県" },
  { ja: "秋田市", nameEn: "Akita", lat: 39.7186, lon: 140.1023, region: "秋田県" },
  { ja: "山形市", nameEn: "Yamagata", lat: 38.2404, lon: 140.3633, region: "山形県" },
  { ja: "福島市", nameEn: "Fukushima", lat: 37.7608, lon: 140.4748, region: "福島県" },
  // 関東
  { ja: "東京都", nameEn: "Tokyo", lat: 35.6762, lon: 139.6503, region: "東京都" },
  { ja: "新宿区", nameEn: "Shinjuku", lat: 35.6938, lon: 139.7035, region: "東京都" },
  { ja: "渋谷区", nameEn: "Shibuya", lat: 35.6580, lon: 139.7016, region: "東京都" },
  { ja: "横浜市", nameEn: "Yokohama", lat: 35.4437, lon: 139.6380, region: "神奈川県" },
  { ja: "川崎市", nameEn: "Kawasaki", lat: 35.5309, lon: 139.7029, region: "神奈川県" },
  { ja: "相模原市", nameEn: "Sagamihara", lat: 35.5716, lon: 139.3733, region: "神奈川県" },
  { ja: "さいたま市", nameEn: "Saitama", lat: 35.8617, lon: 139.6455, region: "埼玉県" },
  { ja: "千葉市", nameEn: "Chiba", lat: 35.6073, lon: 140.1063, region: "千葉県" },
  { ja: "水戸市", nameEn: "Mito", lat: 36.3418, lon: 140.4468, region: "茨城県" },
  { ja: "宇都宮市", nameEn: "Utsunomiya", lat: 36.5548, lon: 139.8830, region: "栃木県" },
  { ja: "前橋市", nameEn: "Maebashi", lat: 36.3895, lon: 139.0634, region: "群馬県" },
  { ja: "高崎市", nameEn: "Takasaki", lat: 36.3226, lon: 139.0028, region: "群馬県" },
  // 中部
  { ja: "新潟市", nameEn: "Niigata", lat: 37.9161, lon: 139.0364, region: "新潟県" },
  { ja: "長野市", nameEn: "Nagano", lat: 36.6513, lon: 138.1813, region: "長野県" },
  { ja: "松本市", nameEn: "Matsumoto", lat: 36.2381, lon: 137.9721, region: "長野県" },
  { ja: "金沢市", nameEn: "Kanazawa", lat: 36.5944, lon: 136.6256, region: "石川県" },
  { ja: "富山市", nameEn: "Toyama", lat: 36.6953, lon: 137.2113, region: "富山県" },
  { ja: "福井市", nameEn: "Fukui", lat: 36.0641, lon: 136.2196, region: "福井県" },
  { ja: "静岡市", nameEn: "Shizuoka", lat: 34.9756, lon: 138.3828, region: "静岡県" },
  { ja: "浜松市", nameEn: "Hamamatsu", lat: 34.7108, lon: 137.7261, region: "静岡県" },
  { ja: "名古屋市", nameEn: "Nagoya", lat: 35.1815, lon: 136.9066, region: "愛知県" },
  { ja: "豊田市", nameEn: "Toyota", lat: 35.0838, lon: 137.1564, region: "愛知県" },
  { ja: "岐阜市", nameEn: "Gifu", lat: 35.4232, lon: 136.7607, region: "岐阜県" },
  { ja: "甲府市", nameEn: "Kofu", lat: 35.6635, lon: 138.5683, region: "山梨県" },
  // 近畿
  { ja: "大阪市", nameEn: "Osaka", lat: 34.6937, lon: 135.5023, region: "大阪府" },
  { ja: "堺市", nameEn: "Sakai", lat: 34.5733, lon: 135.4830, region: "大阪府" },
  { ja: "京都市", nameEn: "Kyoto", lat: 35.0116, lon: 135.7681, region: "京都府" },
  { ja: "神戸市", nameEn: "Kobe", lat: 34.6913, lon: 135.1830, region: "兵庫県" },
  { ja: "姫路市", nameEn: "Himeji", lat: 34.8394, lon: 134.6939, region: "兵庫県" },
  { ja: "奈良市", nameEn: "Nara", lat: 34.6851, lon: 135.8048, region: "奈良県" },
  { ja: "大津市", nameEn: "Otsu", lat: 35.0045, lon: 135.8686, region: "滋賀県" },
  { ja: "和歌山市", nameEn: "Wakayama", lat: 34.2261, lon: 135.1675, region: "和歌山県" },
  { ja: "津市", nameEn: "Tsu", lat: 34.7303, lon: 136.5086, region: "三重県" },
  // 中国
  { ja: "広島市", nameEn: "Hiroshima", lat: 34.3853, lon: 132.4553, region: "広島県" },
  { ja: "岡山市", nameEn: "Okayama", lat: 34.6617, lon: 133.9350, region: "岡山県" },
  { ja: "鳥取市", nameEn: "Tottori", lat: 35.5011, lon: 134.2351, region: "鳥取県" },
  { ja: "松江市", nameEn: "Matsue", lat: 35.4681, lon: 133.0485, region: "島根県" },
  { ja: "山口市", nameEn: "Yamaguchi", lat: 34.1861, lon: 131.4706, region: "山口県" },
  // 四国
  { ja: "高松市", nameEn: "Takamatsu", lat: 34.3428, lon: 134.0466, region: "香川県" },
  { ja: "松山市", nameEn: "Matsuyama", lat: 33.8392, lon: 132.7657, region: "愛媛県" },
  { ja: "高知市", nameEn: "Kochi", lat: 33.5597, lon: 133.5311, region: "高知県" },
  { ja: "徳島市", nameEn: "Tokushima", lat: 34.0703, lon: 134.5549, region: "徳島県" },
  // 九州
  { ja: "福岡市", nameEn: "Fukuoka", lat: 33.5904, lon: 130.4017, region: "福岡県" },
  { ja: "北九州市", nameEn: "Kitakyushu", lat: 33.8834, lon: 130.8751, region: "福岡県" },
  { ja: "佐賀市", nameEn: "Saga", lat: 33.2494, lon: 130.2988, region: "佐賀県" },
  { ja: "長崎市", nameEn: "Nagasaki", lat: 32.7503, lon: 129.8779, region: "長崎県" },
  { ja: "熊本市", nameEn: "Kumamoto", lat: 32.7898, lon: 130.7417, region: "熊本県" },
  { ja: "大分市", nameEn: "Oita", lat: 33.2382, lon: 131.6126, region: "大分県" },
  { ja: "宮崎市", nameEn: "Miyazaki", lat: 31.9111, lon: 131.4239, region: "宮崎県" },
  { ja: "鹿児島市", nameEn: "Kagoshima", lat: 31.5966, lon: 130.5571, region: "鹿児島県" },
  // 沖縄
  { ja: "那覇市", nameEn: "Naha", lat: 26.2124, lon: 127.6809, region: "沖縄県" },
];

export function searchJapanCities(query: string): JapanCity[] {
  const q = query.trim();
  if (!q) return [];
  return JAPAN_CITIES.filter(
    (c) => c.ja.includes(q) || c.region.includes(q) || c.nameEn.toLowerCase().includes(q.toLowerCase())
  ).slice(0, 6);
}
