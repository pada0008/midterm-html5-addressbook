import ReactDOM from "react-dom";
import React from "react";

export let fullMonthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatName({title = "empty", first = "empty", last = "empty"}, withTitle = false) {
    let fullName = "";
    if (withTitle) {
        fullName = upperCase(title) + " ";
    }
    fullName += upperCase(first) + " " + upperCase(last);

    return fullName;
}

export function formatDOB(dob = "1900-01-01 00:00:01") {
    let date = new Date(dob);
    let fulldob = fullMonthName[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    return fulldob;
}

export function formateAddress({street = "empty", city = "empty", state = "empty", postcode = 0}) {
    return upperCase(street) +", " + upperCase(city) + ", " + upperCase(state) + postcode;
}

export function formateAge(dob = "1900-01-01 00:00:01") {
    let date = new Date(Date.now() - new Date(dob).getTime());
    return Math.abs(date.getUTCFullYear() - 1970);
}

export function upperCase(text) {
    return text.split(" ").map(str => str[0].toUpperCase() + str.substring(1)).join(" ");
}