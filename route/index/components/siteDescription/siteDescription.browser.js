// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko.kreditor.store$1.0.0/route/index/components/siteDescription/siteDescription.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_attrs0 = {
        "class": "row"
      },
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("16ace1"),
    marko_node0 = marko_createElement("h1", {
        "class": "text-center titleDesc"
      }, "1", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Сервис по подбору и оформлению онлайн кредитов, займов и других финансовых продуктов."),
    marko_attrs1 = {
        "class": "text-justify bDesc col-12"
      },
    marko_node1 = marko_createElement("hr", null, "3", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_attrs2 = {
        "class": "row"
      },
    marko_node2 = marko_createElement("hr", null, "10", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_attrs3 = {
        "class": "col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center"
      },
    marko_node3 = marko_createElement("div", {
        "class": "textDesc col-sm-12 col-md-9 col-lg-9 col-xl-9"
      }, "7", null, 5, 0, {
        i: marko_const_nextId()
      })
      .t("Сервис ")
      .e("strong", null, null, null, 1)
        .t("kreditor.store")
      .t(" поможет выбрать и оформить кредитную карту, кредит наличными, микрозайм, ипотечный кредит, страхование онлайн, на лучших усл овиях в банке вашего города, а так же подскажет адрес ближайшего офиса. Наш сервис покажет актуальные условия а так же лучши епредложения по кредитованию и дает возможность оформить люббой из перечисленных типов кредитных продуктов полностью ")
      .e("strong", null, null, null, 1)
        .t("онлайн")
      .t(".");

function render(input, out, __component, component, state) {
  var data = input;

  out.e("div", marko_attrs0, "0", component, 2)
    .n(marko_node0, component)
    .e("div", marko_attrs1, "2", component, 3)
      .n(marko_node1, component)
      .e("div", marko_attrs2, "4", component, 2)
        .e("div", marko_attrs3, "5", component, 1)
          .e("img", {
              "class": "i-siteTitle",
              src: "./static/img/site/titleSite." + input.typeImg,
              alt: "Девушка с деньгами",
              loading: "lazy"
            }, "6", component, 0)
        .n(marko_node3, component)
      .n(marko_node2, component);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
