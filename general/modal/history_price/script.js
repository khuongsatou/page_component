document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("priceHistoryModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        fetchPriceHistory();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function fetchPriceHistory() {
        // Placeholder function, replace with actual API call
        const data = [
            { old_price: "100", new_price: "120", change_time: "2024-07-18T12:00:00Z" },
            { old_price: "120", new_price: "110", change_time: "2024-07-17T12:00:00Z" },
            { old_price: "110", new_price: "130", change_time: "2024-07-16T12:00:00Z" },
            { old_price: "130", new_price: "125", change_time: "2024-07-15T12:00:00Z" },
            { old_price: "125", new_price: "140", change_time: "2024-07-14T12:00:00Z" },
            { old_price: "140", new_price: "135", change_time: "2024-07-13T12:00:00Z" },
            { old_price: "135", new_price: "145", change_time: "2024-07-12T12:00:00Z" }
        ];

        const tableBody = document.getElementById("priceHistoryTable");
        tableBody.innerHTML = "";

        data.forEach(record => {
            const row = document.createElement("tr");

            const oldPriceCell = document.createElement("td");
            oldPriceCell.textContent = record.old_price + " VND";
            row.appendChild(oldPriceCell);

            const newPriceCell = document.createElement("td");
            newPriceCell.textContent = record.new_price + " VND";
            row.appendChild(newPriceCell);

            const changeCell = document.createElement("td");
            const oldPrice = parseFloat(record.old_price);
            const newPrice = parseFloat(record.new_price);
            const change = newPrice - oldPrice;
            changeCell.textContent = change.toFixed(2) + " VND";
            changeCell.className = change > 0 ? "increase" : "decrease";
            row.appendChild(changeCell);

            const changeTimeCell = document.createElement("td");
            changeTimeCell.textContent = new Date(record.change_time).toLocaleString();
            row.appendChild(changeTimeCell);

            tableBody.appendChild(row);
        });
    }
});
