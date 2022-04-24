const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const scnd = document.querySelector("#scnd");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(
        ${mm}deg)`;
  scnd.style.transform = `rotateZ(
        ${ss}deg)`;
});
