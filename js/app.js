var dUser = document.getElementById('day');
var mUser = document.getElementById('month');
var yUser = document.getElementById('year');

var dError = document.getElementsByClassName("day-error");
var mError = document.getElementsByClassName("month-error");
var yError = document.getElementsByClassName("year-error");

var yOut = document.getElementById("years-output");
var mOut = document.getElementById("months-output");
var dOut = document.getElementById("days-output");

var date = new Date();
var dCurrent = date.getDate();
var mCurrent = 1 + date.getMonth();
var yCurrent = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const form = document.querySelector("user-input");

form.addEventListener('click', handleSubmit);

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        console.log(i.value);
        if(!i.value) {
            i.classList.add("error");
            validator = false;
            console.log(i);
        } else if (mUser.value > 12) {
            mUser.classList.add("error");
            validator = false;
        } else if (dUser.value > 31) {
            i.classList.add("error");
            validator = false;
        } else {
            i.classList.remove("error");
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
        if (dUser.value > dCurrent) {
            dCurrent = dCurrent + months[mCurrent - 1];
            mCurrent = mCurrent - 1;
        }
        if (mUser.value > mCurrent) {
            mCurrent = mCurrent + 12;
            yCurrent = yCurrent - 1;
        }
        
        const d = dCurrent - dUser.value;
        const m = mCurrent - mUser.value;
        const y = yCurrent - yUser.value;

        dOut.innerHTML = d;
        mOut.innerHTML = m;
        yOut.innerHTML = y;
    }
}