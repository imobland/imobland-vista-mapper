module.exports = function (data, { Foto }) {
  //
  var pictures = [];
  
  for (const i in Foto) {
    const pic = Foto[i];
    pictures.push({
      picture_id: "b523a0c7fafe08fad9f6f38e305675a3",
      display: pic.Destaque == "Sim",
      path: null, // "m8b17DV4/g3rpkKly/8c18d407-e7eb-42b0-9de8-274c68e4f5e6.jpg",
      src: pic.Foto,
      fullpath: pic.Foto,
    });
  }

  // ---------------------------------------------------------------------------
  // Codigo: "123",
  // Foto:
  //   "https://cdn.vistahost.com.br/rafaella18114/vista.imobi/fotos/123/iCT9W3931D8_1235bb3d3b3959e9.jpg",
  // FotoPequena:
  //   "https://cdn.vistahost.com.br/rafaella18114/vista.imobi/fotos/123/iCT9W3931D8_1235bb3d3b3959e9_p.jpg",
  // Destaque: "Sim"

  data.picture_path = "9lw7xVpx/ppt-NR3v0QlG/kLBXOoyW.jpg";
  data.pictures = pictures;
};
