// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko.kreditor.store$1.0.0/route/index/components/header/header.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    asset_var_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/asset-var/renderer")),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("8436fa"),
    marko_node0 = marko_createElement("meta", {
        charset: "UTF-8"
      }, "1", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node1 = marko_createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, "2", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node2 = marko_createElement("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "ie=edge"
      }, "3", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node3 = marko_createElement("title", null, "5", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Кредит, кредитная карта, займ, автокредит, ипотека онлайн"),
    marko_node4 = marko_createElement("meta", {
        name: "description",
        content: "Описание страницы сайта."
      }, "6", null, 0, 0, {
        i: marko_const_nextId()
      });

function render(input, out, __component, component, state) {
  var data = input;

  out.be("head", null, "0", component);

  out.n(marko_node0, component);

  out.n(marko_node1, component);

  out.n(marko_node2, component);

  lasso_head_tag({}, out, __component, "4");

  out.n(marko_node3, component);

  out.n(marko_node4, component);

  out.be("noscript", null, "7", component);

  asset_var_tag({
      values: [
          require.resolve("./../../../../public/fonts/roboto/roboto.css")
        ],
      renderBody: function renderBody(out, __href) {
        out.e("link", {
            rel: "stylesheet",
            href: __href.url,
            async: true
          }, "8", component, 0);
      }
    }, out, __component, "10");

  out.ee();

  lasso_head_tag({}, out, __component, "9");

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
