const clock = document.querySelector(".js-clock .clock__text");
const today = document.querySelector(".js-clock .date__text");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  clock.innerHTML = time;
  return;
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = 1 + date.getMonth();
  const day = date.getDate();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");
  const todayLabel = date.getDay();
  const weekLabel = week[todayLabel];

  const formatDate = `${year}-${month >= 10 ? month : "0" + month}-${
    day >= 10 ? day : "0" + day
  } (${weekLabel})`;
  today.innerHTML = formatDate;
  return;
}

function init() {
  getTime();
  getDate();
  setInterval(getTime, 1000);
  return;
}

init();
