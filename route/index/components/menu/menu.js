// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko.kreditor.store$1.0.0/route/index/components/menu/menu.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    menu_button_template = marko_loadTemplate(require.resolve("./components/menu-button.marko")),
    marko_loadTag = marko_helpers.t,
    menu_button_tag = marko_loadTag(menu_button_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"btn-group\">");

  var $for$0 = 0;

  marko_forEach(input.list, function(item) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    menu_button_tag({
        name: item.typeProduct
      }, out, __component, "1" + $keyScope$0);
  });

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./menu.style.css"
    ],
    id: "/marko.kreditor.store$1.0.0/route/index/components/menu/menu.marko",
    tags: [
      "./components/menu-button.marko"
    ]
  };
