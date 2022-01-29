
export default async function getWordle() {
    const wordleBase = "https://www.powerlanguage.co.uk/wordle/";
    const wordleNumber = Math.floor((new Date().getTime() - new Date("2021-06-19").getTime()) / 86400000);
    const wordleText = await (await fetch(wordleBase)).text();
    const hash = wordleText.substring(wordleText.indexOf("window.wordle.hash = '") + 22, wordleText.indexOf("'", wordleText.indexOf("window.wordle.hash = '") + 22));
    
    const mainJsText = await (await fetch(`${wordleBase}main.${hash}.js`)).text();
    const wordleOfTheDay = mainJsText.substring(
    mainJsText.indexOf("var La=[") + 8, 
    mainJsText.indexOf("]", mainJsText.indexOf("var La=[") + 8))
    .replace(/"/g, "").split(",")[wordleNumber];

    return { number: wordleNumber, word: wordleOfTheDay };
}
