"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isVisibility(visibilityFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return visibilityFromRequest;
};
const isString = (string) => {
    return typeof string === "string";
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    return Object.values(enum_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(enum_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
//string instanceof String
