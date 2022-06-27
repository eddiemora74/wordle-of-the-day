require("dotenv").config();

export default async function getWordle() {
    // base constants
    const today = new Date().getTime();
    const epoch = new Date(process.env.WORDLE_EPOCH).getTime();
    const dayInMS = 86400000;
    const number = Math.floor((today - epoch) / dayInMS);

    // Make http request to get the wordle markup.
    const wordleText = await (await fetch(process.env.WORDLE_BASE_URL)).text();

    // Find the current hash of the mainjs file.
    const hashFindStart = wordleText.indexOf(process.env.WORDLE_HASH_FIND_START);
    const hashFindEnd = wordleText.indexOf(process.env.WORDLE_HASH_FIND_END, hashFindStart) + process.env.WORDLE_HASH_FIND_END.length;
    const hash = wordleText.substring(hashFindStart, hashFindEnd).replace(".css", ".js");
    
    // Make http request to get contents of main.js file.
    const mainJsText = await (await fetch(`${hash}`)).text();

    // Find the list of all possible values.
    const listFindStart = mainJsText.indexOf(process.env.WORDLE_LIST_FIND_START) - 1;
    const listFindEnd = mainJsText.indexOf(process.env.WORDLE_LIST_FIND_END, listFindStart);
    const wordleList = mainJsText
        .substring(listFindStart, listFindEnd)
        .replace(/"/g, "")
        .split(",");

    const word = wordleList[number];

    return { number, word };
}
