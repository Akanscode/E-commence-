// ==========================timmer 001==============//

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  /*======================if year is enable year = day * 365; ==========*/
  x = setInterval(function () {
    //=========setting time on here========//
    var countDownDate = new Date("Dec 5, 2022 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;

    /*============if year is enbale========*/
    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );
  }, 0);
  //==========002============//
  x = setInterval(function () {
    var countDownDate = new Date("Dec 5, 2021 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    /*----===========if year is enable===========*/
    document.getElementById("days1").innerText = Math.floor(distance / day);
    document.getElementById("hours1").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes1").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds1").innerText = Math.floor(
      (distance % minute) / second
    );
  }, 0);
  /*===============003==============*/
  x = setInterval(function () {
    var countDownDate = new Date("Dec 5, 2023 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    /*----===========if year is enable===========*/
    document.getElementById("days2").innerText = Math.floor(distance / day);
    document.getElementById("hours2").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes2").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds2").innerText = Math.floor(
      (distance % minute) / second
    );
  }, 0);
  /*=============-004===========*/
  x = setInterval(function () {
    var countDownDate = new Date("Dec 5, 2021 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    /*----===========if year is enable===========*/
    document.getElementById("days3").innerText = Math.floor(distance / day);
    document.getElementById("hours3").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes3").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds3").innerText = Math.floor(
      (distance % minute) / second
    );
  }, 0);
  /*=============005=============*/
  x = setInterval(function () {
    var countDownDate = new Date("Dec 5, 2021 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    /*----===========if year is enable===========*/
    document.getElementById("days4").innerText = Math.floor(distance / day);
    document.getElementById("hours4").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes4").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds4").innerText = Math.floor(
      (distance % minute) / second
    );
  }, 0);
  // ==============all default time=========//
  x = setInterval(function () {
    var countDownDate = new Date("Dec 5, 2021 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    /*----===========if year is enable===========*/
    document.getElementById("days3").innerText = Math.floor(distance / day);
    document.getElementById("hours3").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes3").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds3").innerText = Math.floor(
      (distance % minute) / second
    );
  }, 0);
  //===========005==========//
  x = setInterval(function () {
    var countDownDate = new Date("Dec 5, 2021 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    /*----===========if year is enable===========*/
    document.getElementById("days4").innerText = Math.floor(distance / day);
    document.getElementById("hours4").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes4").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds4").innerText = Math.floor(
      (distance % minute) / second
    );
  }, 0);
})();
