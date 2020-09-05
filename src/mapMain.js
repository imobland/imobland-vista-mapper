module.exports = function (data) {
  //
  const { Referencia } = data;
  const { DescricaoWeb } = data;
  const { Status, ValorLocacao, ValorVenda } = data;
  const { DestaqueWeb, KeywordsWeb } = data;

  const operations = {
    Venda: { key: "sale", label: "Venda" },
    Aluguel: { key: "rent", label: "Locação" },
  };

  var goal;
  if (operations.hasOwnProperty(Status)) {
    goal = operations[Status];
  } else {
    goal = { key: null, label: null };
  }

  // FinalidadeStatus.VENDA
  const property = {
    operation_id: goal.key,
    goal,
    objective_id: 1,
    reference: Referencia,
    description: DescricaoWeb,
    price: goal.key === "rent" ? ValorLocacao : ValorVenda,
    highlighted: DestaqueWeb == "Sim",
    highlighted_date: Date.now(),
    tags: [],
    keywords: KeywordsWeb, //KeywordsWeb.split(" ").join(" "),
    date_created: data.DataCadastro,
    last_modified: data.DataAtualizacao,
  };

  return property;
};
