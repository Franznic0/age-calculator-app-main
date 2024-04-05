var dUser = document.getElementById('day');
var mUser = document.getElementById('month');
var yUser = document.getElementById('year');

var dError = document.querySelector(".day-error");
var mError = document.querySelector(".month-error");
var yError = document.querySelector(".year-error");

var yOut = document.querySelector("#years-output");
var mOut = document.querySelector("#months-output");
var dOut = document.querySelector("#days-output");

var date = new Date();
var dCurrent = date.getDate();
var mCurrent = 1 + date.getMonth();
var yCurrent = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const submit = document.querySelector("#user-submit");

// validate input
function validateInput() {

    // validate date
  dUser.oninput = () => {
    if (dUser.value == 0) {
      document.querySelector("#user-day").classList.add("error");
      dError.innerHTML = "Must be a valid day";
    } else if (dUser.value > 31) {
        document.querySelector("#user-day").classList.add("error");
        dError.innerHTML = "Must be a valid day";
    } else {
        document.querySelector("#user-day").classList.remove("error");
        dError.innerHTML = "";
    }
  };

  // validate month
  mUser.oninput = () => {
    if (mUser.value == 0) {
      document.querySelector("#user-month").classList.add("error");
      mError.innerHTML = "Must be a valid month";
    } else if (mUser.value > 12) {
        document.querySelector("#user-month").classList.add("error");
        mError.innerHTML = "Must be a valid month";
    } else {
        document.querySelector("#user-month").classList.remove("error");
        mError.innerHTML = "";
    }
  };

  // validate year
  yUser.oninput = () => {
    if (yUser.value == 0) {
      document.querySelector("#user-year").classList.add("error");
      yError.innerHTML = "Must be a valid year";
    } else if (yUser.value > yCurrent) {
        document.querySelector("#user-year").classList.add("error");
        yError.innerHTML = "Must be in the past";
    }  else {
        document.querySelector("#user-year").classList.remove("error");
        yError.innerHTML = "";
    }
  };
}

// handle submit
function handleSubmit() {


    if (dCurrent - dUser < 0) {
        mCurrent -= 1;
    } else if (mCurrent - mUser < 0 ){
        yCurrent - 1;
    }
    // day submit
    if (dUser.value == "" || dUser.value == 0) {
        document.querySelector("#user-day").classList.add("error");
        dError.innerHTML = "This field is required";
        dOut.innerHTML = "--";
    } else {
        let d = dCurrent - dUser.value;
        dOut.innerHTML = d;
    }

    // month submit
    if (mUser.value == "" || mUser.value == 0) {
        document.querySelector("#user-month").classList.add("error");
        mError.innerHTML = "This field is required";
        mOut.innerHTML = "--";
    } else {
        let m = mCurrent - mUser.value;
        mOut.innerHTML = m;
    }

    // year submit
    if (yUser.value == "") {
        document.querySelector("#user-year").classList.add("error");
        yError.innerHTML = "This field is required";
        yOut.innerHTML = "--";
    } else {
        let y = yCurrent - yUser.value;
        yOut.innerHTML = y;
    }
    
    // if (dUser.value > dCurrent) {
    //     dCurrent = dCurrent + months[mCurrent - 1];
    //     mCurrent = mCurrent - 1;
    // }
    // if (mUser.value > mCurrent) {
    //     mCurrent = mCurrent + 12;
    //     yCurrent = yCurrent - 1;
    // }

    // const m = mCurrent - mUser.value;
    // const y = yCurrent - yUser.value;

    // mOut.innerHTML = m;
    // yOut.innerHTML = y;
    
};
validateInput();
// submit
// submit.addEventListener('submit', handleSubmit());