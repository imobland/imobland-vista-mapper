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

module.exports = function (data, { FinalidadeStatus }) {
  //
  data.goal = { label: null };

  if (FinalidadeStatus.VENDA) {
    data.goal = {
      key: "sale",
      label: "Venda",
    };
  }
  if (FinalidadeStatus.LOCACAO) {
    data.goal = {
      key: "rent",
      label: "Locação",
      };
  };
};
