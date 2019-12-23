// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko.kreditor.store$1.0.0/route/news/news.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    marko_attrs0 = {
        lang: "ru"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("72b76b"),
    marko_node0 = marko_createElement("meta", {
        charset: "UTF-8"
      }, "2", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node1 = marko_createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, "3", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node2 = marko_createElement("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "ie=edge"
      }, "4", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node3 = marko_createElement("title", null, "6", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node4 = marko_createElement("div", {
        "class": "container"
      }, "9", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("div", {
          "class": "row"
        }, null, null, 0);

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      dirname: __dirname,
      filename: __filename
    }, out);

  out.be("html", marko_attrs0, "0", component);

  out.be("head", null, "1", component);

  out.n(marko_node0, component);

  out.n(marko_node1, component);

  out.n(marko_node2, component);

  lasso_head_tag({}, out, __component, "5");

  out.n(marko_node3, component);

  lasso_head_tag({}, out, __component, "7");

  out.ee();

  out.be("body", null, "8", component);

  component_globals_tag({}, out);

  out.n(marko_node4, component);

  lasso_body_tag({}, out, __component, "11");

  browser_refresh_tag({
      enabled: "true"
    }, out, __component, "12");

  lasso_body_tag({}, out, __component, "13");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "14");

  out.ee();

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
