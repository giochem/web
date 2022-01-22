const months = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];
const weekdays = [
  'Thứ Hai',
  'Thứ Ba',
  'Thứ Tư',
  'Thứ Năm',
  'Thứ Sáu',
  'Thứ Bảy',
  'Chủ Nhật',
];

const countdownTime = document.querySelector(".countdown-time");
const items = document.querySelectorAll(".deadline-format h2");
console.log(items);

let futureDay = new Date(2022, 1, 1, 0, 0, 0);
const year  = futureDay.getFullYear();
// edit month and weekday
let month = futureDay.getMonth();
month = months[month - 1];
const weekday = weekdays[futureDay.getDate()];

const date = futureDay.getDate();
const hours = futureDay.getHours();
const minutes = futureDay.getMinutes();

// coutdwon time
countdownTime.textContent = `Thời gian đếm ngược kết thúc vào ${weekday} ngày ${date} tháng ${month} năm ${year} ${hours}:${minutes}pm`;

const futureTime = futureDay.getTime();
function getRemaindingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  
  const values = [days, hours, minutes, seconds];
  // format
  // console.log(items);
  function format(item){
    if (item < 10){
      return item = `0${item}`;
    }
    return item;
  }
  // countdown time
  items.forEach(function(item, index){
    console.log("check");
    item.innerHTML = format(values[index]);
  });
  // check deadline end  => break
  // if ( t < 0) {
  //   clearInterval();
  // }
// 
}
let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();