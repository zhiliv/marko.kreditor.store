// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko.kreditor.store$1.0.0/route/index/components/siteDescription/siteDescription.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"row\"><h1 class=\"text-center titleDesc\">Сервис по подбору и оформлению онлайн кредитов, займов и других финансовых продуктов.</h1><div class=\"text-justify bDesc col-12\"><hr><div class=\"row\"><div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center\"><img class=\"i-siteTitle\"" +
    marko_attr("src", "./static/img/site/titleSite." + input.typeImg) +
    " alt=\"Девушка с деньгами\" loading=\"lazy\"></div><div class=\"textDesc col-sm-12 col-md-9 col-lg-9 col-xl-9\">Сервис <strong>kreditor.store</strong> поможет выбрать и оформить кредитную карту, кредит наличными, микрозайм, ипотечный кредит, страхование онлайн, на лучших усл овиях в банке вашего города, а так же подскажет адрес ближайшего офиса. Наш сервис покажет актуальные условия а так же лучши епредложения по кредитованию и дает возможность оформить люббой из перечисленных типов кредитных продуктов полностью <strong>онлайн</strong>.</div></div><hr></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./siteDescription.style.css"
    ],
    id: "/marko.kreditor.store$1.0.0/route/index/components/siteDescription/siteDescription.marko"
  };
