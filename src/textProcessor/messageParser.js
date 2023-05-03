import { getResponse } from "./responses.js";
import { removeAccents } from "./utils.js";

const tags = {
    greetings: ["hola", "como esta", "buen dia", "como va", "buenas"],
    thanks: ["gracias", "nos vemos", "chau", "adios", "suerte"],
    activities: [
        "actividades",
        "evento",
        "charlas",
        "para hacer",
        "visit",
        "excurs",
        "guia",
        "turis",
        "pasear",
        "paseo",
    ],
    location: ["dond", "lugar", "ubicacion", "como llego", "como llegar"],
    //English
    english_greetings: [
        "hello",
        "hi",
        "what's up",
        "good morning",
        "good afternoon",
        "good evening",
        "hey",
    ],
    english_thanks: [
        "thank you",
        "good bye",
        "see you later",
        "bye",
        "good luck",
    ],
    english_activities: [
        "activities",
        "events",
        "what to do",
        "where to visit",
        "where to go",
        "guide",
        "tours",
        "go for a walk",
    ],
    english_location: [
        "where are you located",
        "location",
        "gps",
        "how to get there",
    ],
};

const getTags = (message) => {
    const tagsDetected = [];
    for (const key in tags) {
        if (checkTag(message, tags[key])) {
            tagsDetected.push(key);
        }
    }
    return tagsDetected;
};

const checkTag = (message, tagValues) => {
    for (let i = 0; i < tagValues.length; i++) {
        if (removeAccents(message.toLowerCase()).includes(tagValues[i])) {
            return true;
        }
    }
    return false;
};

const messageParser = (message) => {
    const tags = getTags(message);
    return getResponse(tags);
};

export default messageParser;
