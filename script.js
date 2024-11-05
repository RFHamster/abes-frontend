const mockData = [
    { brazil_position: 1, brazil_movement: "João", global_investment: "joao@example.com", latin_america_investment: "9999-9999", investment_sectors: "São Paulo", study_year: "SP" },
    { brazil_position: 2, brazil_movement: "Maria", global_investment: "maria@example.com", latin_america_investment: "9888-8888", investment_sectors: "Rio de Janeiro", study_year: "RJ" },
    { brazil_position: 3, brazil_movement: "Carlos", global_investment: "carlos@example.com", latin_america_investment: "9777-7777", investment_sectors: "Belo Horizonte", study_year: "MG" },
    { brazil_position: 4, brazil_movement: "Ana", global_investment: "ana@example.com", latin_america_investment: "9666-6666", investment_sectors: "Porto Alegre", study_year: "RS" },
    { brazil_position: 5, brazil_movement: "Pedro", global_investment: "pedro@example.com", latin_america_investment: "9555-5555", investment_sectors: "Curitiba", study_year: "PR" }
];

function populateTable() {
    const tableBody = document.querySelector("#mockTable tbody");

    mockData.forEach(data => {
        const row = document.createElement("tr");
        
        const study_yearCell = document.createElement("td");
        study_yearCell.textContent = data.study_year;
        row.appendChild(study_yearCell);

        const brazil_positionCell = document.createElement("td");
        brazil_positionCell.textContent = data.brazil_position;
        row.appendChild(brazil_positionCell);

        const brazil_movementCell = document.createElement("td");
        brazil_movementCell.textContent = data.brazil_movement;
        row.appendChild(brazil_movementCell);

        const global_investmentCell = document.createElement("td");
        global_investmentCell.textContent = data.global_investment;
        row.appendChild(global_investmentCell);

        const latin_america_investmentCell = document.createElement("td");
        latin_america_investmentCell.textContent = data.latin_america_investment;
        row.appendChild(latin_america_investmentCell);

        const investment_sectorsCell = document.createElement("td");
        investment_sectorsCell.textContent = data.investment_sectors;
        row.appendChild(investment_sectorsCell);

        

        tableBody.appendChild(row);
    });
}

window.onload = populateTable;
