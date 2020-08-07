module.exports = function (data) {
  //
  const { Referencia } = data;
  const { DescricaoWeb } = data;
  const { ValorVenda, ValorLocacao } = data;
  const { DestaqueWeb, KeywordsWeb } = data;

  let operation_id = ValorLocacao && !ValorVenda ? "rent" : "sale";

  const goal = {
    key: operation_id,
    label: operation_id == "rent" ? "Locação" : "Venda",
  };

  // FinalidadeStatus.VENDA
  const property = {
    operation_id,
    goal,
    objective_id: 1,
    reference: Referencia,
    description: DescricaoWeb,
    price: operation_id === "rent" ? ValorLocacao : ValorVenda,
    highlighted: DestaqueWeb == "Sim",
    highlighted_date: Date.now(),
    tags: [],
    keywords: KeywordsWeb, //KeywordsWeb.split(" ").join(" "),
    date_created: data.DataCadastro,
    last_modified: data.DataAtualizacao,
  };

  return property;
};
