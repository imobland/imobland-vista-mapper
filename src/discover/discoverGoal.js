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

module.exports = function (data, { Finalidade }) {
  //
  data.goal = { label: null };

  // if (!Finalidade) {
  //   Finalidade = "Venda";
  // }
  console.log(Finalidade);
  switch (Finalidade) {
    case "Venda":
      data.goal = {
        key: "sale",
        label: "Venda",
      };
      break;
    case "Locação":
      data.goal = {
        key: "rent",
        label: "Locação",
      };
      break;
  }
};
