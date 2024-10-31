// 保护代码
// 字符串转ASCII码-十进制
// https://www.asciim.cn/m/tools/convert_string_to_ascii.html
!(function () {
  var local = window.location.host;
  if (local.indexOf("127.0.0.1") === -1) {
    var host_arr = [97, 107, 52, 55, 115, 46, 99, 110]; // ak47s.cn
    var http_arr = [104, 116, 116, 112, 115, 58, 47, 47]; // https://
    var my_url = [];
    var my_http = [];
    for (var item in host_arr) {
      my_url.push(String.fromCharCode(host_arr[item]));
    }
    for (var item in http_arr) {
      my_http.push(String.fromCharCode(http_arr[item]));
    }
    if (local.indexOf(my_url.join("")) === -1) {
      location.href = my_http.join("") + my_url.join("") + "/";
    }
  } else {
    console.log(
      "%c 本地调试模式打开 ",
      "color:white;background:#6ba263;padding:8px 0;"
    );
  }
})();
// time
var time = document.querySelector("#time");
time.innerHTML = "00:00:00";
setInterval(function () {
  var dd = new Date();
  var hh = dd.getHours();
  var mm = dd.getMinutes();
  var ss = dd.getSeconds();
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }
  time.innerHTML = hh + ":" + mm + ":" + ss;
}, 500);
console.log(
  "%c 欢迎访问我们的官网 https://www.myzye.com/ ",
  "color:white;background:#AED6F1;padding:8px 0;"
);
console.log(
  "%c AK47网址导航唯一地址 https://ak47s.cn/ ",
  "color:white;background:#A9DFBF;padding:8px 0;"
);
console.log(
  "%c 意见反馈 https://support.qq.com/products/60345 ",
  "color:white;background:#FADBD8;padding:8px 0;"
);
console.log(
  "%c 绿色无广告网址导航 ",
  "text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);color: #D4EFDF;font-size:5em"
);
