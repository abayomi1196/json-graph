const sampleJson = Object.freeze({
  title: "Shingeki no Kyojin: The Final Season Part 2",
  source: "MANGA",
  format: "TV",
  episodeDuration: "24 mins.",
  characters: [
    {
      name: "Levi -  リヴァイ",
      age: 29,
      height: "160cm (5'3)",
      affiliations: "Scouting Legion"
    },
    {
      name: "Eren Yeager - エレン・イェーガー",
      age: 16,
      height: "170cm (5'7)"
    },
    {
      name: "Mikasa Ackerman - ミカサ・アッカーマン",
      age: 16,
      height: "170cm (5'7)",
      Position: "104th Training Corps, Scouting Legion"
    },
    {
      name: "Armin Arlert - アルミン・アルレルト",
      age: 15,
      height: "163cm (5'4)",
      Position: "104th Training Squad, Scouting Legion"
    },
    {
      name: "Hange Zoe - ハンジ・ゾエ",
      height: "170cm (5'7)",
      Position: "Scouting Legion"
    }
  ]
});

export const defaultJSON = JSON.stringify(sampleJson, null, 2);
