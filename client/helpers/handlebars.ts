/// <reference path="../../_all.ts"/>

Handlebars.registerHelper('pluralize', (n, thing) => {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});