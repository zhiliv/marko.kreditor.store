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
    app_menu_template = require("../components/app-menu/app-menu.marko"),
    app_menu_tag = marko_loadTag(app_menu_template),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

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

  app_menu_tag({}, out, __component, "9");

  out.w("<div class=\"container\"><div class=\"row\"></div></div>");

  lasso_body_tag({}, out, __component, "12");

  browser_refresh_tag({
      enabled: "true"
    }, out, __component, "13");

  lasso_body_tag({}, out, __component, "14");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "15");

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
          code: "@import (\"./public/css/grid.css\");\r\n  @import (\"./public/css/text.css\");\r\n  @import (\"./public/css/custom.css\");",
          virtualPath: "./main.marko.css",
          path: "./main.marko"
        }
    ],
    id: "/marko.kreditor.store$1.0.0/route/main/main.marko",
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/core-tags/components/component-globals-tag",
      "../components/app-menu/app-menu.marko",
      "@lasso/marko-taglib/taglib/body-tag",
      "browser-refresh-taglib/refresh-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
