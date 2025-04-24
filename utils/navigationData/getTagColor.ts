export interface ITagColors {
  [key: string]: string
}

export const tagColors: ITagColors = {
  announcements: "#FCAB9B",
  updates: "#ADFFE7",
  community: "#ABFDA8",
  patchNotes: "#B8BFFF",
  lore: "#DDAFFF",
  development: "#FF8AB5",
}
export const getTagColor = (tag: string) => {
  return tagColors[tag] || "#eee"
}
