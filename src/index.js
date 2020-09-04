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
    const attr_tags = ["in-condominium"];

    for (const i in property.attributes) {
      const row = property.attributes[i];
      if (!row) continue;

      if (primaries.includes(row.name)) {
        property.attr_data[row.name] = row.value;
      }
      if (attr_tags.includes(row.name)) {
        property.tags.push("in-condominium");
      }
    }

    // -------------------------------------------------------------------------

    if (type.category) property.tags.push(type.category);

    if (goal.key) property.tags.push(goal.key);

    // REVER COM O CLIENTE

    // switch (objective_id) {
    //   case 1:
    //     property.tags.push("residential");
    //   case 2:
    //     property.tags.push("commercial");
    //   case 3:
    //     property.tags.push("industrial");
    //   case 4:
    //     property.tags.push("rural");
    // }

    // if (highlighted) property.tags.push('highlighted');

    // -------------------------------------------------------------------------

    return property;
  },
};
