/* Vue.component("totootool-menu", {
    template:
    "<nav class='navbar navbar-expand-md navbar-light'>" +
    "   <a class='navbar-brand' href='/'>ToTooTool.com</a>" +
    "   <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false'>" +
    "       <span class='navbar-toggler-icon'></span>" +
    "   </button>" +
    "   <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>" +
    "       <div class='navbar-nav'>" +
    "           <a v-for='menu in menus' v-bind:class='{active: active == menu.code}' class='nav-item nav-link' v-bind:href='menu.url'>{{menu.name}}</a>" +
    "       </div>" +
    "   </div>" +
    "</nav>",
    props: ["active"],
    data: function () {
        return {
            menus: [{
                name: "JSON格式化",
                code: "jsonFormatter",
                url: "./json.html"
            }, {
                name: "XML格式化",
                code: "xmlFormatter",
                url: "./xml.html"
            }, {
                name: "Timestamp转换",
                code: "timestamp",
                url: "./timestamp.html"
            }]
        }
    },
    methods: {}
});

Vue.component("totootool-footer", {
    template:
    "<footer>" +
    "   <a href=\"//www.totootool.com/about.html\">ToTooTool.com</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href=\"http://www.miit.gov.cn\" target=\"_blank\">粤ICP备14055264号</a>" +
    "</footer>"
}); */

var ToTooTool = {
    el: "#ToTooTool",
    mounted: function () {
    }
};

/* var ToTooToolHost = "//www.totootool.com"; */
