const btnAdd = document.querySelector('.add');
const btnStart = document.querySelector('.start');
const divMyNumbers = document.querySelector('.myNumbers p');

const myNumbers = [];
const lottoNum = [];
const stats = {
    games: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0
}

function addNumbers(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    const newNumber = input.value;
    if (input.value.length) {
        if (myNumbers.length === 6) {
            return alert('Wprowadzono już wszytkie numerki !');
        } else if (newNumber < 1 || newNumber > 49) {
            return alert('Podano nieprawidłowy numerek !');
        }
        for (number of myNumbers) {
            if (newNumber == number) {
                return alert('Ten numerek już jest !');
            }
        }
        myNumbers.push(Number(newNumber));
        divMyNumbers.textContent += newNumber + ', ';
        input.value = ""
    }
}

const draw = () => {
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * (49 - 1 + 1) + 1);
        if (lottoNum.includes(num)) {
            i--;
            continue;
        }
        lottoNum.push(num);
    }
}

function checkResult(t1, t2) {
    const correctNum = [];
    const correctNumbersPublish = document.querySelector('.correctNumbers span');
    const lottoNumbersPublish = document.querySelector('.lottoNumbers span');
    lottoNumbersPublish.textContent = '';
    correctNumbersPublish.textContent = '';
    for (let i = 0; i < t1.length; i++) {
        for (let j = 0; j < t2.length; j++) {
            if (t1[i] === t2[j]) {
                correctNum.push(t1[i]);
            }
        }
    }
    if (correctNum.length === 3) {
        stats.three++
    } else if (correctNum.length === 4) {
        stats.four++
    } else if (correctNum.length === 5) {
        stats.five++
    } else if (correctNum.length === 6) {
        stats.six++;
        alert('Gratulacje trafiłeś 6 !!!!!!')
    }
    correctNum.length === 0 ? correctNumbersPublish.textContent = '------' : correctNumbersPublish.textContent += correctNum.join(', ');
    lottoNumbersPublish.textContent += lottoNum.join(', ');
}

function startGame() {
    if (myNumbers.length === 0) {
        return alert('Nie podałeś swoich numerków !');
    }
    draw();
    checkResult(myNumbers, lottoNum);
    lottoNum.length = 0;
    stats.games++;
    document.querySelector('.stats .games').textContent = stats.games;
    document.querySelector('.stats .three').textContent = stats.three;
    document.querySelector('.stats .four').textContent = stats.four;
    document.querySelector('.stats .five').textContent = stats.five;
    document.querySelector('.stats .six').textContent = stats.six;
}

btnAdd.addEventListener('click', addNumbers);
btnStart.addEventListener('click', startGame);