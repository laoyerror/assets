var timer = null;
var sxText = document.querySelector(".sx-text");
var sxClear = document.querySelector(".search-clear");
var autocomplete = document.querySelector(".autocomplete-container");
var suggest = document.querySelector(".addsuggest");
var stypelist = document.querySelector(".s-type-list");

!(function () {
  // if (window.location.href.indexOf("ak47s.cn") === -1) {
  //   window.location.href = "https://www.ak47s.cn/";
  //   return;
  // }

  var local = window.location.host;
  if (local.indexOf("127.0.0.1") === -1) {
    // 字符串转ASCII码-十进制
    // https://www.asciim.cn/m/tools/convert_string_to_ascii.html
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

  //isPhone
  const devices = ["iPhone", "Android", "Windows Phone"];
  const ua = window.navigator.userAgent;
  for (let i = 0; i < devices.length; i++) {
    if (ua.indexOf(devices[i]) != -1) {
      window.location.href = "/m/index.html";
    }
  }

  sxText.onblur = function () {
    setTimeout(() => {
      autocomplete.style.display = "none";
    }, 200);
  };

  // let searchValue = '夜雨聆风'
  // let url = `https://sug.so.360.cn/suggest?callback=getSearchData&encodein=utf-8&encodeout=utf-8&word=${searchValue}`
  // let url = `https://suggestion.baidu.com/su?callback=searchSug&wd=${searchValue}&cb=searchSug`
  // let url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${searchValue}`
  // fetch(url, {
  //   method: "get",
  //   mode: "cors",
  //   headers: {
  // 'Accept': 'application/json',
  // 'Accept': 'application/x-www-form-urlencoded',
  // "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // body: "请求参数"
  //  }).then(response => response.json()).then(data => {
  // console.log(data,'-------------')
  //  }).catch(e=>console.log('错误' + e))
})();

function searchExpand() {
  stypelist.style.display = "block";
}

function mouseover() {
  stypelist.style.display = "block";
}

function mouseout() {
  stypelist.style.display = "none";
}

function onInput() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    fetchAssociationalWord();
  }, 500);
}

function moreWeather() {
  window.open("https://tianqi.qq.com/", "_blank");
}

function onClear() {
  sxText.value = "";
  this.fetchAssociationalWord();
}

function fetchAssociationalWord() {
  let searchValue = sxText.value;
  if (searchValue.length) {
    sxClear.style.display = "block";
    $.ajax({
      url: `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${searchValue}`,
      type: "get",
      dataType: "jsonp",
      // jsonp: "callback",
      success: function (response) {
        autocomplete.style.display = "block";
        let suggestArr = "";
        if (response.g) {
          response.g.forEach((item, index) => {
            suggestArr +=
              '<li><i class="auto-raq auto-1">' +
              (index + 1) +
              "</i><span>" +
              item.q +
              "</span></li>";
          });
          suggest.innerHTML = suggestArr;
          setInput();
        } else {
          suggest.innerHTML =
            '<li><span style="margin-left:200px">T_T暂无搜索词联想结果T_T</span></li>';
        }
      },
      error: function (err) {
        autocomplete.style.display = "none";
        console.log(err, "error");
      },
    });
  } else {
    sxClear.style.display = "none";
    autocomplete.style.display = "none";
  }
}

let index = -1;
sxText.onkeydown = function (e) {
  let dom = suggest.childNodes;
  dom.forEach((r, t) => {
    dom[t].style.backgroundColor = "#fff";
  });
  if (e.keyCode === 8 && dom.length) {
    index = -1;
  }
  if (e.keyCode === 40 && dom.length) {
    index < dom.length - 1 ? ++index : (index = 0);
    dom[index].style.backgroundColor = "#E5E8E8";
    sxText.value = dom[index].childNodes[1].innerText;
  }
  if (e.keyCode === 38 && dom.length) {
    index > 0 ? --index : (index = dom.length - 1);
    dom[index].style.backgroundColor = "#E5E8E8";
    sxText.value = dom[index].childNodes[1].innerText;
  }
  if (e.keyCode === 13) {
    autocomplete.style.display = "none";
  }
};

function setInput() {
  let suggestClick = suggest.childNodes;
  suggestClick.forEach((r, t) => {
    suggestClick[t].onclick = function () {
      let dom = suggest.childNodes;
      dom.forEach((d, i) => {
        dom[i].style.backgroundColor = "#fff";
      });
      dom[t].style.backgroundColor = "#E5E8E8";
      sxText.value = suggestClick[t].childNodes[1].innerText;
    };
  });
}

//search
!(function () {
  function g() {
    h(), i(), j(), k();
  }

  function h() {
    d.checked = s();
  }

  function i() {
    var a = document.querySelector('input[name="type"][value="' + p() + '"]');
    a && ((a.checked = !0), l(a));
  }

  function j() {
    v(u());
  }

  function k() {
    w(t());
  }

  function l(a) {
    for (var b = 0; b < e.length; b++) e[b].classList.remove("s-current");
    a.parentNode.parentNode.parentNode.classList.add("s-current");
  }

  function m(a, b) {
    window.localStorage.setItem("superSearch" + a, b);
  }

  function n(a) {
    return window.localStorage.getItem("superSearch" + a);
  }

  function o(a) {
    stypelist.style.display = "none";
    (f = a.target),
      v(u()),
      w(a.target.value),
      m("type", a.target.value),
      c.focus(),
      l(a.target);
  }

  function p() {
    var b = n("type");
    return b || a[0].value;
  }

  function q(a) {
    m("newWindow", a.target.checked ? 1 : -1), x(a.target.checked);
  }

  function r(a) {
    autocomplete.style.display = "none";
    return (
      a.preventDefault(),
      "" == c.value
        ? (c.focus(), !1)
        : (w(t() + c.value),
          x(s()),
          s() ? window.open(b.action, +new Date()) : (location.href = b.action),
          void 0)
    );
  }

  function s() {
    var a = n("newWindow");
    return a ? 1 == a : !0;
  }

  function t() {
    return document.querySelector('input[name="type"]:checked').value;
  }

  function u() {
    return document
      .querySelector('input[name="type"]:checked')
      .getAttribute("data-placeholder");
  }

  function v(a) {
    c.setAttribute("placeholder", a);
  }

  function w(a) {
    b.action = a;
  }

  function x(a) {
    a ? (b.target = "_blank") : b.removeAttribute("target");
  }
  var y,
    a = document.querySelectorAll('input[name="type"]'),
    b = document.querySelector("#super-search-fm"),
    c = document.querySelector("#search-text"),
    d = document.querySelector("#set-search-blank"),
    e = document.querySelectorAll(".search-group"),
    f = a[0];
  for (g(), y = 0; y < a.length; y++) a[y].addEventListener("change", o);
  d.addEventListener("change", q), b.addEventListener("submit", r);
})();
console.log(
  "%c 欢迎访问我们的官网 https://myzye.com/ ",
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
//isShow
var swith = document.querySelector(".kai");
var unitInfo = localStorage.getItem("laoyee");
var list = document.querySelector(".list");
var section = document.querySelector(".section");
var btntext = "";
if (unitInfo == "duang") {
  swith.style.backgroundImage =
    "url(https://bu.dusays.com/2024/10/31/67231f37ebd2f.png)";
  list.style.display = "none";
  section.style.borderBottom = "none";
  btntext = "展开";
} else if (unitInfo == "happy") {
  swith.style.backgroundImage =
    "url(https://bu.dusays.com/2024/10/31/67231f366df07.png)";
  list.style.display = "block";
  section.style.borderBottom = "solid 1px #d6d6d6";
  btntext = "关闭";
} else {
  swith.style.backgroundImage =
    "url(https://bu.dusays.com/2024/10/31/67231f366df07.png)";
  list.style.display = "block";
  section.style.borderBottom = "solid 1px #d6d6d6";
  btntext = "关闭";
}
swith.onclick = function () {
  if (btntext == "展开") {
    this.style.backgroundImage =
      "url(https://bu.dusays.com/2024/10/31/67231f366df07.png)";
    list.style.display = "block";
    section.style.borderBottom = "solid 1px #d6d6d6";
    btntext = "关闭";
    localStorage.setItem("laoyee", "happy");
  } else {
    this.style.backgroundImage =
      "url(https://bu.dusays.com/2024/10/31/67231f37ebd2f.png)";
    list.style.display = "none";
    section.style.borderBottom = "none";
    btntext = "展开";
    localStorage.setItem("laoyee", "duang");
  }
};
// time
var time = document.querySelector("#time");
time.innerHTML = "00:00";
setInterval(function () {
  var dd = new Date();
  var hh = dd.getHours();
  var mm = dd.getMinutes();
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  time.innerHTML = hh + ":" + mm;
}, 1000);
time.addEventListener("click", function () {
  window.open("https://time.is/zh/", "_blank");
});
//top
var tops = document.querySelector(".tops");
var istop = true;
var timer = null;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 600) {
    tops.style.display = "block";
  } else {
    tops.style.display = "none";
  }
  if (!istop) {
    clearInterval(timer);
  }
  istop = false;
};

function returnTop() {
  timer = setInterval(function () {
    var dtop = document.documentElement.scrollTop;
    var speed = Math.floor(-dtop / 10);
    document.documentElement.scrollTop = dtop + speed;
    istop = true;
    if (document.documentElement.scrollTop == 0) {
      clearInterval(timer);
    }
  }, 30);
}

var dialog = document.querySelector(".dialog");
var dialogCache = localStorage.getItem("link");
var linkValue = "";
if (dialogCache) {
  document.querySelector(".list").innerHTML = dialogCache;
}

function userDiy() {
  document.querySelector("textarea").value =
    document.querySelector(".list").innerHTML;
  dialog.style.display = "block";
}

function dialogClose() {
  dialog.style.display = "none";
}

function dialogSave() {
  linkValue = document.querySelector("textarea").value;
  // if (linkValue.indexOf('script') === -1) {
  //     localStorage.setItem('link', linkValue)
  //     document.querySelector('.list').innerHTML = linkValue
  //     dialog.style.display = "none";
  // } else {
  //     alert('格式错误!请重新编辑输入')
  // }
  localStorage.setItem("link", linkValue);
  document.querySelector(".list").innerHTML = linkValue;
  dialog.style.display = "none";
}

function cleanCache() {
  localStorage.setItem("link", "");
  dialog.style.display = "none";
  window.location.reload();
}

// stop
// window.onload=function(){
// 	document.onkeydown=function(){
// 		var e=window.event||arguments[0];
// 		if(e.keyCode==123){
// 			return false;
// 		}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
// 		    return false;
// 		}else if((e.ctrlKey)&&(e.keyCode==83)){
// 		    return false;
// 		}
// 	};
// 	document.oncontextmenu=function(){
// 		return false;
// 	}
// }

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v6 ，更新了加密算法，缩减了体积;
 * 另外 jsjiami.com.v6 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v6 不能去掉，其他都没有任何绑定。
 * 誓死不会加入任何后门，JsJiami.com 加密的使命就是为了保护你们的Javascript 。
 */
