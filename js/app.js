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

const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
};

// handle submit
let d = 0;
let m = 0;

function handleSubmit() {
    // check calendar validity
    if (dUser.value > months[mUser.value-1]) {
        document.querySelector("#user-day").classList.add("error");
        dError.innerHTML = "Must be a valid day";
        dOut.innerHTML = "--";
        mOut.innerHTML = "--";
        yOut.innerHTML = "--";
        return;
    } else if (mUser > 12) {
        return;
    } else if (yUser > yCurrent) {
        return;
    };

    // day submit
    if (dUser.value == "" || dUser.value == 0) {
        document.querySelector("#user-day").classList.add("error");
        dError.innerHTML = "This field is required";
        return;
    } else {
        d = dCurrent - dUser.value;
    }

    // month submit
    if (mUser.value == "" || mUser.value == 0) {
        document.querySelector("#user-month").classList.add("error");
        mError.innerHTML = "This field is required";
        return;
    } else {
        m = mCurrent - mUser.value;
    }

    // year submit
    if (yUser.value == "") {
        document.querySelector("#user-year").classList.add("error");
        yError.innerHTML = "This field is required";
        return;
    }

    // calculate age
    if (d < 0) {
        dCurrent = dCurrent + months[mUser.value-1];
        mCurrent -= 1;
    };

    if (m < 0) {
        mCurrent += 12;
        yCurrent -= 1;
    };
    
    const dResult = dCurrent - dUser.value;
    const mResult = mCurrent - mUser.value;
    const yResult = yCurrent - yUser.value;

    dOut.innerHTML = dResult;
    mOut.innerHTML = mResult;
    yOut.innerHTML = yResult;
};
validateInput();