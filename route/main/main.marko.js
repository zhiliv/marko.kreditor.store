// Compiled using marko@4.18.27 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko.kreditor.store$1.0.0/route/main/main.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  const test = "тествоая фраза";

  lasso_page_tag({
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!DOCTYPE html><html lang=\"ru\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">");

  lasso_head_tag({}, out, __component, "5");

  out.w("<title></title>");

  lasso_head_tag({}, out, __component, "7");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><div class=\"row\"><div class=\"col-12\"><h1>Заголовок1</h1></div><div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\" style=\"border: 2px solid gray; height: 15vh;\">" +
    marko_escapeXml(test) +
    "</div><div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\" style=\"border: 2px solid gray; height: 15vh;\">Текст 323</div><div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\" style=\"border: 2px solid gray; height: 15vh;\">Текст 2</div></div></div>");

  lasso_body_tag({}, out, __component, "16");

  browser_refresh_tag({
      enabled: "true"
    }, out, __component, "17");

  lasso_body_tag({}, out, __component, "18");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "@import (\"./static/css/grid.css\");",
          virtualPath: "./main.marko.css",
          path: "./main.marko"
        }
    ],
    id: "/marko.kreditor.store$1.0.0/route/main/main.marko",
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/core-tags/components/component-globals-tag",
      "@lasso/marko-taglib/taglib/body-tag",
      "browser-refresh-taglib/refresh-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
