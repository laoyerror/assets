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
var query = window.location.search.substring(1).replace("target=", "");
if (query) {
  var queryUrl = decodeURIComponent(window.atob(query));
  document.getElementById("goBtn").href = queryUrl;
  document.querySelector(".urlColor").textContent = queryUrl;
} else {
  document.getElementById("goBtn").href = "https://19ta.com/";
}
function CheckGoUrl() {
  if (document.getElementById("isOk").checked) {
    document.location.href = goUrl;
    return true;
  } else {
    alert("请先打钩左侧【本人已知晓风险】项!");
    return false;
  }
}
