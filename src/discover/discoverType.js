const Types = require("../../resources/vista/vista-types");
const OutTypes = require("../../resources/imobland/admin-types");

function findRow(rows, cb) {
  for (const i in rows) {
    const row = rows[i];
    if (cb(row)) {
      return row;
    }
  }
}

module.exports = function (data, { Categoria }) {
  //
  if (!Categoria) {
    return;
  }

  var row = findRow(Types, (type) => type.name == Categoria);

  if (row) {
    data.type = findRow(OutTypes, (type) => type.id == row.bind.id);
  }
};
