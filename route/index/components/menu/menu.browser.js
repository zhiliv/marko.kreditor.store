// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko.kreditor.store$1.0.0/route/index/components/menu/menu.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_forEach = marko_helpers.f,
    menu_button_template = require("./components/menu-button.marko"),
    marko_loadTag = marko_helpers.t,
    menu_button_tag = marko_loadTag(menu_button_template),
    marko_attrs0 = {
        "class": "btn-group"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.be("div", marko_attrs0, "0", component);

  var $for$0 = 0;

  marko_forEach(input.list, function(item) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    menu_button_tag({
        name: item.typeProduct
      }, out, __component, "1" + $keyScope$0);
  });

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
