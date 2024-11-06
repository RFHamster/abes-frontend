const getData = async () => {
    const response = await fetch("http://localhost:8000/abes/table");

    if (!response.ok) {
        throw new Error("Falha ao obter dados da API");
    }

    return response.json();
}

async function populateTable() {
    try {
        const data = await getData();


        if (!Array.isArray(data)) {
            console.error("Os dados não são um array. Estrutura recebida:", data);
            return;
        }

        const tableBody = document.querySelector("#mockTable tbody");
        tableBody.innerHTML = "";

        data.forEach(data => {
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
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}

window.onload = populateTable;
