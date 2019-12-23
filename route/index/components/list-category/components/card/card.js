// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko.kreditor.store$1.0.0/route/index/components/list-category/components/card/card.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"col-sm-12 col-md-4 col-lg-4 col-xl-4 card\"><div class=\"row bodyCard\"><div class=\"col-12\"><h3 class=\"nameProduct text-center\">" +
    marko_escapeXml(input.name) +
    "</h3><div class=\"text-center\"><img" +
    marko_attr("src", (("/static/img/product/100_dney_bez_procentov/" + input.baner) + ".") + input.typeImg) +
    " loading=\"lazy\"" +
    marko_attr("alt", input.name) +
    "></div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./card.style.css"
    ],
    id: "/marko.kreditor.store$1.0.0/route/index/components/list-category/components/card/card.marko"
  };
