// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko.kreditor.store$1.0.0/route/index/components/list-category/list-category.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    card_template = marko_loadTemplate(require.resolve("./components/card/card.marko")),
    marko_loadTag = marko_helpers.t,
    card_tag = marko_loadTag(card_template),
    await_tag = marko_loadTag(require("marko/src/core-tags/core/await/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  await_tag({
      _provider: input.list,
      _name: "input.list",
      placeholder: {
          renderBody: function(out) {
            out.w("<h1>asdfasdfasdfasdfasfasf</h1><h1>asdfasdfasdfasdfasfasf</h1><h1>asdfasdfasdfasdfasfasf</h1><h1>asdfasdfasdfasdfasfasf</h1><h1>asdfasdfasdfasdfasfasf</h1>");
          }
        },
      then: {
          renderBody: function(out, list) {
            var $for$0 = 0;

            marko_forEach(list, function(item) {
              var $keyScope$0 = "[" + (($for$0++) + "]");

              out.w("<a" +
                marko_attr("name", item.typeProduct) +
                "></a><div class=\"listProduct\" style=\"background: #edeef0;\"><h2 class=\"text-center category\">" +
                marko_escapeXml(item.typeProduct) +
                "</h2>");

              var $for$1 = 0;

              marko_forEach(item.list, function(product) {
                var $keyScope$1 = "[" + ((($for$1++) + $keyScope$0) + "]");

                out.w("<div class=\"row\">");

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "12" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "13" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "14" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "15" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "16" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "17" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "18" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "19" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "20" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "21" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "22" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "23" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "24" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "25" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "26" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "27" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "28" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "29" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "30" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "31" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "32" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "33" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "34" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "35" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "36" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "37" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "38" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "39" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "40" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "41" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "42" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "43" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "44" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "45" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "46" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "47" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "48" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "49" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "50" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "51" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "52" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "53" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "54" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "55" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "56" + $keyScope$1);

                card_tag({
                    name: product.name,
                    baner: product.baner,
                    typeImg: input.typeImg
                  }, out, __component, "57" + $keyScope$1);

                out.w("</div>");
              });

              out.w("</div>");
            });
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./list-category.style.css"
    ],
    id: "/marko.kreditor.store$1.0.0/route/index/components/list-category/list-category.marko",
    tags: [
      "./components/card/card.marko",
      "marko/src/core-tags/core/await/renderer"
    ]
  };
