// Simulando um atendente cadastrado
const atendente = {
  email: "biel@gmail.com",
  senha: "123456",
  nome: "Atendente Gabriel"
};

const loginContainer = document.querySelector(".login-container");
const chatContainer = document.querySelector(".chat-container");
const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");
const atendenteName = document.getElementById("atendente-name");

const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Função para mostrar mensagem no chat
function adicionarMensagem(mensagem, remetente) {
  const div = document.createElement("div");
  div.textContent = `${remetente}: ${mensagem}`;
  div.style.marginBottom = "8px";
  if (remetente === atendente.nome) {
    div.style.fontWeight = "bold";
  }
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight; // rolar para a última mensagem
}

// Login do atendente
loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const senha = passwordInput.value.trim();

  if (email === atendente.email && senha === atendente.senha) {
    loginContainer.style.display = "none";
    chatContainer.style.display = "block";
    atendenteName.textContent = atendente.nome;
    loginError.textContent = "";
  } else {
    loginError.textContent = "Email ou senha incorretos.";
  }
});

// Enviar mensagem pelo atendente
sendBtn.addEventListener("click", () => {
  const mensagem = chatInput.value.trim();
  if (mensagem === "") return;
  adicionarMensagem(mensagem, atendente.nome);
  chatInput.value = "";
  // Aqui você pode adicionar código para responder o cliente ou enviar a mensagem para o servidor
});

// Enviar mensagem ao pressionar Enter
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
