document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    loadSessionData();
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

function loadSessionData() {
    const sessions = [
        {
            sessionName: 'Session 1',
            items: [
                {api: 'API 1', requestTime: '2024-07-08 10:00:00', completionTime: '2024-07-08 10:01:00', productQuantity: 5, status: 'success'},
                {api: 'API 2', requestTime: '2024-07-08 10:02:00', completionTime: '2024-07-08 10:03:00', productQuantity: 3, status: 'error'}
            ]
        },
        {
            sessionName: 'Session 2',
            items: [
                {api: 'API 3', requestTime: '2024-07-08 10:04:00', completionTime: '2024-07-08 10:05:00', productQuantity: 8, status: 'success'},
                {api: 'API 4', requestTime: '2024-07-08 10:06:00', completionTime: '2024-07-08 10:07:00', productQuantity: 6, status: 'error'}
            ]
        }
        // Thêm các session khác...
    ];

    const sessionsContainer = document.getElementById('sessionsContainer');
    sessionsContainer.innerHTML = '';

    sessions.forEach((session, sessionIndex) => {
        const sessionDiv = document.createElement('div');
        sessionDiv.className = 'session';

        const sessionTitle = document.createElement('h3');
        sessionTitle.textContent = session.sessionName;
        sessionDiv.appendChild(sessionTitle);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>API</th>
                <th>Thời gian yêu cầu</th>
                <th>Thời gian hoàn thành</th>
                <th>Số lượng sản phẩm</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
            </tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        session.items.forEach((item, itemIndex) => {
            const row = document.createElement('tr');

            const apiCell = document.createElement('td');
            apiCell.textContent = item.api;
            row.appendChild(apiCell);

            const requestTimeCell = document.createElement('td');
            requestTimeCell.textContent = item.requestTime;
            row.appendChild(requestTimeCell);

            const completionTimeCell = document.createElement('td');
            completionTimeCell.textContent = item.completionTime;
            row.appendChild(completionTimeCell);

            const productQuantityCell = document.createElement('td');
            productQuantityCell.textContent = item.productQuantity;
            row.appendChild(productQuantityCell);

            const statusCell = document.createElement('td');
            statusCell.textContent = item.status === 'success' ? 'Thành công' : 'Thất bại';
            statusCell.className = item.status === 'success' ? 'success' : 'error';
            row.appendChild(statusCell);

            const actionCell = document.createElement('td');
            const syncButton = document.createElement('button');
            syncButton.textContent = 'Đồng bộ lại';
            syncButton.className = 'sync-button';
            syncButton.addEventListener('click', function() {
                syncRequest(sessionIndex, itemIndex);
            });
            actionCell.appendChild(syncButton);
            row.appendChild(actionCell);

            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        sessionDiv.appendChild(table);
        sessionsContainer.appendChild(sessionDiv);
    });
}

function syncRequest(sessionIndex, itemIndex) {
    // Logic đồng bộ lại yêu cầu API tại đây
    alert('Đang đồng bộ lại yêu cầu thứ ' + (itemIndex + 1) + ' trong Session ' + (sessionIndex + 1));
}
