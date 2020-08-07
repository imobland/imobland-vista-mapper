function findRow(rows, cb) {
  for (const i in rows) {
    const row = rows[i];
    if (cb(row)) {
      return row;
    }
  }
}

module.exports = function (data, vista) {
  //
  const {
    Cidade,
    Bairro,
    UF,
    Numero,
    CEP,
    Complemento,
    TipoEndereco,
    Endereco,
    Latitude,
    Longitude,
  } = vista;

  const city = { name: Cidade };
  const district = { name: Bairro };
  const state = { name: null, acronym: UF, abreviation: UF };

  const location = {
    street: TipoEndereco + " " + Endereco,
    number: Numero,
    postalcode: CEP,
    complement: Complemento,
    city,
    district,
    state,
    position: { lat: Latitude, lon: Longitude },
  };

  data.location = location;
};
