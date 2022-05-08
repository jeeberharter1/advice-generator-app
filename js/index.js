const baseURL = 'https://api.adviceslip.com/advice';
const generateImg = document.getElementById('generate-btn');
const adviceBody = document.getElementById('advice');
const adviceNum = document.getElementById('advice-num');

const getAdvice = async () => {
    await fetch(baseURL, { cache: "no-cache" })
        .then(res => res.json())
        .then(data => {
            adviceBody.innerHTML = data.slip.advice;
            adviceNum.innerHTML = data.slip.id;
        })
        .catch(error => console.log(error));
}

window.onload = getAdvice();
generateImg.addEventListener('click', getAdvice);