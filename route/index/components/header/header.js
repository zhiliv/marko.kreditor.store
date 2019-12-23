// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko.kreditor.store$1.0.0/route/index/components/header/header.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    asset_var_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/asset-var/renderer")),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">");

  lasso_head_tag({}, out, __component, "4");

  out.w("<title>Кредит, кредитная карта, займ, автокредит, ипотека онлайн</title><meta name=\"description\" content=\"Описание страницы сайта.\"><noscript>");

  asset_var_tag({
      values: [
          require.resolve("./../../../../public/fonts/roboto/roboto.css")
        ],
      renderBody: function renderBody(out, __href) {
        out.w("<link rel=\"stylesheet\"" +
          marko_attr("href", __href.url) +
          " async>");
      }
    }, out, __component, "10");

  out.w("</noscript>");

  lasso_head_tag({}, out, __component, "9");

  out.w("</head>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko.kreditor.store$1.0.0/route/index/components/header/header.marko",
    tags: [
      "@lasso/marko-taglib/taglib/head-tag",
      "@lasso/marko-taglib/taglib/asset-var/renderer"
    ]
  };
