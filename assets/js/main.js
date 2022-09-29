const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector(".advice-generator-number");
const adviceQuoteSlot = document.querySelector(".advice-generator-quote");
const fetchBtn = document.querySelector("button.advice-generator-btn");

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json()
    return advice
};

const renderAdvice = (adviceObj) => {
    const {
        id,
        advice
    } = adviceObj;
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    adviceQuoteSlot.textContent = advice;
};

let generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;

    // Rendering of data
    renderAdvice(advice)
};

window.addEventListener('DOMContentLoaded', () => {
    fetchBtn.addEventListener('click', generateNewAdvice)
})