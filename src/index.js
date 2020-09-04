const discoverType = require("./discover/discoverType");
const discoverLocation = require("./discover/discoverLocation");
const discoverAttributes = require("./discover/discoverAttributes");
const discoverPictures = require("./discover/discoverPictures");

const mapMain = require("./mapMain");

module.exports = {
  //
  map(resource, mapConfig) {
    //
    const property = mapMain(resource);

    discoverType(property, resource);
    discoverLocation(property, resource);
    discoverAttributes(property, resource, mapConfig);
    discoverPictures(property, resource);

    const { type, goal, location } = property;
    const { district } = location;

    // -------------------------------------------------------------------------
    // TITLE
    let title = ["Imóvel"];

    if (type && type.name) title[0] = type.name;
    if (goal && goal.label) title.push(`para ${goal.label}`);
    if (district && district.name) title.push(`em ${district.name}`);

    property.title = title.map((key) => key.trim()).join(" ");

    property.attr_data = {};

    const primaries = ["bed", "bath", "garage", "suites"];
    for (const i in property.attributes) {
      const row = property.attributes[i];
      if (row && primaries.includes(row.name)) {
        property.attr_data[row.name] = row.value;
      }
    }

    // -------------------------------------------------------------------------

    return property;
  },
};
