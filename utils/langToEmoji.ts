export interface ILanguageFlags {
  [key: string]: string
}

const languageFlags: ILanguageFlags = {
  aa: "🇩🇯",
  af: "🇿🇦",
  ak: "🇬🇭",
  sq: "🇦🇱",
  am: "🇪🇹",
  ar: "🇪🇬",
  hy: "🇦🇲",
  ay: "🇼🇭",
  bm: "🇲🇱",
  be: "🇧🇾",
  bn: "🇧🇩",
  bi: "🇻🇺",
  bs: "🇧🇦",
  my: "🇲🇲",
  ca: "🇦🇩",
  zh: "🇨🇳",
  cs: "🇨🇿",
  da: "🇩🇰",
  dv: "🇲🇻",
  dz: "🇧🇹",
  en: "🇺🇸",
  et: "🇪🇪",
  ee: "🇪🇼",
  fj: "🇫🇯",
  fil: "🇵🇭",
  gaa: "🇬🇭",
  ka: "🇬🇪",
  el: "🇬🇷",
  gn: "🇬🇾",
  gu: "🇮🇳",
  he: "🇮🇱",
  hi: "🇮🇳",
  ho: "🇵🇬",
  ig: "🇳🇬",
  ga: "🇮🇪",
  ja: "🇯🇵",
  kr: "🇳🇵",
  kk: "🇰🇿",
  km: "🇰🇭",
  kmb: "🇦🇴",
  kg: "🇨🇬",
  ko: "🇰🇷",
  kj: "🇦🇴",
  ku: "🇮🇶",
  ky: "🇰🇬",
  lo: "🇱🇦",
  la: "🇻🇦",
  ln: "🇨🇬",
  lu: "🇨🇩",
  lb: "🇱🇺",
  ms: "🇲🇾",
  mi: "🇳🇿",
  mos: "🇧🇫",
  ne: "🇳🇵",
  nd: "🇿🇼",
  nso: "🇿🇦",
  nb: "🇳🇴",
  nn: "🇳🇴",
  ny: "🇲🇼",
  pap: "🇦🇼",
  ps: "🇦🇫",
  fa: "🇮🇷",
  pa: "🇮🇳",
  qu: "🇼🇭",
  rm: "🇨🇭",
  rn: "🇧🇮",
  sg: "🇨🇫",
  sr: "🇷🇸",
  srr: "🇸🇳",
  sn: "🇿🇼",
  si: "🇱🇰",
  sl: "🇸🇮",
  snk: "🇸🇳",
  nr: "🇿🇦",
  st: "🇱🇸",
  ss: "🇸🇿",
  sv: "🇸🇪",
  tl: "🇵🇭",
  tg: "🇹🇯",
  ta: "🇱🇰",
  te: "🇮🇳",
  tet: "🇹🇱",
  ti: "🇪🇷",
  tpi: "🇵🇬",
  ts: "🇿🇦",
  tn: "🇧🇼",
  tk: "🇹🇲",
  uk: "🇺🇦",
  umb: "🇦🇴",
  ur: "🇵🇰",
  ve: "🇿🇦",
  vi: "🇻🇳",
  cy: "🇬🇧",
  wo: "🇸🇳",
  xh: "🇿🇦",
  zu: "🇿🇦",
}
const FIRST_EMOJI_CODE = 127397
export const getFlagEmoji = (language: string) => {
  return (
    languageFlags[language]
    ?? language
      .toUpperCase()
      .replace(/./g, char =>
        String.fromCodePoint(FIRST_EMOJI_CODE + char.charCodeAt(0)),
      )
  )
}
