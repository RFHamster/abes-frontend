// Dados mock (simulados)
const mockData = [
    { id: 1, nome: "João", email: "joao@example.com", telefone: "9999-9999", cidade: "São Paulo", estado: "SP" },
    { id: 2, nome: "Maria", email: "maria@example.com", telefone: "9888-8888", cidade: "Rio de Janeiro", estado: "RJ" },
    { id: 3, nome: "Carlos", email: "carlos@example.com", telefone: "9777-7777", cidade: "Belo Horizonte", estado: "MG" },
    { id: 4, nome: "Ana", email: "ana@example.com", telefone: "9666-6666", cidade: "Porto Alegre", estado: "RS" },
    { id: 5, nome: "Pedro", email: "pedro@example.com", telefone: "9555-5555", cidade: "Curitiba", estado: "PR" }
];

// Função para preencher a tabela com dados mock
function populateTable() {
    const tableBody = document.querySelector("#mockTable tbody");

    mockData.forEach(data => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = data.id;
        row.appendChild(idCell);

        const nomeCell = document.createElement("td");
        nomeCell.textContent = data.nome;
        row.appendChild(nomeCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = data.email;
        row.appendChild(emailCell);

        const telefoneCell = document.createElement("td");
        telefoneCell.textContent = data.telefone;
        row.appendChild(telefoneCell);

        const cidadeCell = document.createElement("td");
        cidadeCell.textContent = data.cidade;
        row.appendChild(cidadeCell);

        const estadoCell = document.createElement("td");
        estadoCell.textContent = data.estado;
        row.appendChild(estadoCell);

        tableBody.appendChild(row);
    });
}

// Chama a função para popular a tabela ao carregar a página
window.onload = populateTable;
