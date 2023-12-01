function calcularNotaFiscal() {
    //PEGANDO OS DADOS DA NOTA
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
  
    //CALCULANDO IMPOSTO
    const imposto = valor * 0.05;
    const total = valor + imposto;
  
    //EXIBINDO A NOTA
    const notaFiscalHTML = `
      <h2>Nota Fiscal de Serviço</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Descrição do Serviço:</strong> ${descricao}</p>
      <p><strong>Valor do Serviço:</strong> R$ ${valor.toFixed(2)}</p>
      <p><strong>Imposto 5%:</strong> R$ ${imposto.toFixed(2)}</p>
      <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscalHTML;
  }
  