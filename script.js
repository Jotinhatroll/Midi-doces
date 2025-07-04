let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  document.getElementById('contador').innerText = carrinho.length;
  const lista = document.getElementById('lista-carrinho');
  lista.innerHTML = '';
  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.produto} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerDoCarrinho(${index})" style="float: right; background: transparent; color: red; border: none; cursor: pointer;">✖</button>
    `;
    lista.appendChild(li);
  });
  document.getElementById('total').innerText = total.toFixed(2);
}

function removerDoCarrinho(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function abrirCarrinho() {
  document.getElementById('carrinho').classList.toggle('aberto');
}

function finalizarPedido() {
  if (carrinho.length === 0) return alert('Seu carrinho está vazio!');

  let mensagem = 'Olá! Quero fazer o seguinte pedido:%0A';
  carrinho.forEach(item => {
    mensagem += `- ${item.produto}: R$ ${item.preco.toFixed(2)}%0A`;
  });
  mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;
  window.open(`https://wa.me/5516981492681?text=${mensagem}`, '_blank');
}
