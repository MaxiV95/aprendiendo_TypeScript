import { newDiaryEntry } from "../types";
import { Visibility, Weather } from "../enum";

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }
  return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest;
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missing weather");
  }
  return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isVisibility(visibilityFromRequest)) {
    throw new Error("Incorrect or missing visibility");
  }
  return visibilityFromRequest;
};

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param);
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param);
};

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment),
  };
  return newEntry;
};

export default toNewDiaryEntry;

//string instanceof String
