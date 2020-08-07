const _ = require("lodash");

const camel2title = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase());

const getValue = (mapping, key, value) => {
  //
  var attr = mapping.attributes && mapping.attributes[key];

  if (!attr) attr = {};

  if (!attr.label) attr.label = _.upperFirst(_.startCase(key).toLowerCase());
  if (!attr.group) attr.group = "features";
  if (!attr.type) attr.type = "text";

  attr.value = value;

  return attr;
};

const getAttributes = (data, mapping) => {
  //
  const attributes = {};

  if (mapping.allow) {
    data = _.pick(data, mapping.allow);
  }
  if (mapping.deny) {
    data = _.omit(data, mapping.deny);
  }

  for (const key in data) {
    attributes[key] = getValue(mapping, key, data[key]);
  }

  return attributes;
};

module.exports = function (data, vista, mapConfig) {
  //
  data.attributes = getAttributes(vista, mapConfig);
};
