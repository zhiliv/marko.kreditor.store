// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko.kreditor.store$1.0.0/route/components/navbar/navbar.marko", function() {
      return module.exports;
    }),
    marko_component = require("./navbar.component"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_forEach = marko_helpers.f,
    navbar_button_template = require("./components/navbar-button/navbar-button.marko"),
    marko_loadTag = marko_helpers.t,
    navbar_button_tag = marko_loadTag(navbar_button_template),
    marko_attrs0 = {
        "class": "topnav",
        id: "myTopnav"
      },
    marko_attrs1 = {
        style: "float: left; padding: 0px; margin: 0px"
      },
    marko_attrs2 = {
        href: "javascript:void(0);",
        "class": "icon"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("38888f"),
    marko_node0 = marko_createElement("span", {
        "on-click": "openBars"
      }, "6", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("☰");

function render(input, out, __component, component, state) {
  var data = input;

  out.be("div", marko_attrs0, "0", component);

  out.e("div", marko_attrs1, "1", component, 1)
    .e("img", {
        src: "/static/img/logo/logo." + input.typeImg,
        "class": "navlogo",
        alt: "logo",
        loading: "lazy"
      }, "2", component, 0);

  var $for$0 = 0;

  marko_forEach(state.listMenu, function(item) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    if (input.navbar == item.route) {
      navbar_button_tag({
          class: "active lnk",
          name: item.name,
          route: item.route
        }, out, __component, "3" + $keyScope$0);
    } else {
      navbar_button_tag({
          class: "lnk",
          name: item.name,
          route: item.route
        }, out, __component, "4" + $keyScope$0);
    }
  });

  out.e("a", marko_attrs2, "5", component, 1, 0, {
      onclick: __component.d("click", "openBars", false)
    })
    .n(marko_node0, component);

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);
