const { v4: uuidv4 } = require("uuid");

module.exports = function (data, { Foto }) {
  //
  var pictures = [];

  for (const i in Foto) {
    const pic = Foto[i];
    pictures.push({
      picture_id: uuidv4(),
      display: pic.Destaque == "Sim",
      path: null,
      src: pic.Foto,
      fullpath: pic.Foto,
    });
    if (pic.Destaque == "Sim") {
      data.display_url = pic.Foto;
    }
  }

  data.pictures = pictures;
};
