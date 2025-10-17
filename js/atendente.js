// Simulação simples do atendente para responder clientes
const clientesConectados = [];

function receberMensagemDoCliente(mensagem) {
  adicionarMensagem(`Cliente: ${mensagem}`, 'Cliente');
  // Resposta automática simples do atendente
  setTimeout(() => {
    adicionarMensagem(`Atendente Gabriel: Recebi sua mensagem - "${mensagem}"`, 'Atendente Gabriel');
  }, 1000);
}

function adicionarMensagem(texto, remetente) {
  const chatWindow = document.getElementById("chat-window");
  const div = document.createElement("div");
  div.textContent = `${remetente}: ${texto}`;
  div.style.marginBottom = "8px";
  if (remetente === "Atendente Gabriel") {
    div.style.fontWeight = "bold";
  }
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Aqui você pode adicionar funções para conectar com o cliente via WebSocket ou outra tecnologia
