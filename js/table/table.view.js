const elements = {
    table: document.querySelector('#tbody'),
    select: document.querySelector('#productSelect'),
    topStatusBar: document.querySelector('#topStatusBar'),
    leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
    leftPanelNav: document.querySelector('.left-panel__navigation'),
    badgeNew: document.querySelector('#badge-new'),
};

function renderRequests(requests) {
    elements.table.innerHTML = '';

    const badges = {
        new: 'badge-danger',
        inwork: 'badge-warning',
        complete: 'badge-success',
    };

    for (let request of requests) {
        const pemplate = `  <tr>
                                <th scope="row">${request.id}</th>
                                <td>${request.dateDisp}</td>
                                <td>${request.productName}</td>
                                <td>${request.name}</td>
                                <td>${request.email}</td>
                                <td>${request.phone}</td>
                                <td>
                                    <div class="badge badge-pill ${badges[request.status]}">${request.statusName}</div>
                                </td>
                                <td>
                                    <a href="edit.html?id=${request.id}">Редактировать</a>
                                </td>
                            </tr>`;

        elements.table.insertAdjacentHTML('beforeend', pemplate);
    }
}

function updateStatusLinks(value) {
    elements.topStatusBar.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
    elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active');

    elements.leftPanelNav.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
    elements.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add('active');
}

function renderBadgeNew(num) {
    elements.badgeNew.innerText = num;

    if (num == 0) {
        elements.badgeNew.classList.add('none');
    } else {
        elements.badgeNew.classList.remove('none');
    }
}

function updateFilter(filter) {
    elements.select.value = filter.products;

    elements.topStatusBar.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
    elements.topStatusBar.querySelector(`a[data-value="${filter.status}"]`).classList.add('active');

    elements.leftPanelNav.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
    elements.leftPanelNav.querySelector(`a[data-value="${filter.status}"]`).classList.add('active');
}

export { elements, renderRequests, updateStatusLinks, renderBadgeNew, updateFilter };
