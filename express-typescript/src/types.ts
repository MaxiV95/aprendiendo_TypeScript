import { Weather, Visibility } from "./enum";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

/*export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry,  "id" | "date" | "weather" | "visibility">;*/

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;
export type newDiaryEntry = Omit<DiaryEntry, "id">;
