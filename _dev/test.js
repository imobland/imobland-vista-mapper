const Vista = require("../src");
const { omit } = require("lodash");
const mapConfig = require("../resources/mapConfig");

const run = (async) => {
  //
  const property = Vista.map(require("./vista-property"), mapConfig);

  console.log(omit(property, ["attributes"]));
  //
};

run();
