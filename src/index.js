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
    const { city } = location;
    
    // -------------------------------------------------------------------------
    // TITLE
    let title = ["Imóvel"];

    if (type && type.label) title[0] = type.label;
    if (goal && goal.label) title.push(`para ${goal.label}`);
    if (city && city.name) title.push(`em ${city.name}`);

    property.title = title.map((key) => key.trim()).join(" ");

    // -------------------------------------------------------------------------

    return property;
  },
};
