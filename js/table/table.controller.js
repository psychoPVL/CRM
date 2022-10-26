import * as model from './../model.js';
import * as view from './table.view.js';

function init() {
    const requests = model.getRequests();
    view.renderRequests(requests);
    addEventListeners();

    const newRequestsCount = model.countNewRequest();
    view.renderBadgeNew(newRequestsCount);

    const filter = model.getFilter();

    view.updateFilter(filter);
}

function addEventListeners() {
    view.elements.select.addEventListener('change', filterProducts);
    view.elements.topStatusBar.addEventListener('click', filterByStatus);
    view.elements.leftStatusLinks.forEach((item) => {
        item.addEventListener('click', filterByStatus);
    });
}

function filterProducts() {
    const filter = model.changeFilter('products', this.value);
    const filteredRequest = model.filterRequests(filter);
    view.renderRequests(filteredRequest);
}

function filterByStatus(e) {
    const filter = model.changeFilter('status', e.target.dataset.value);
    const filteredRequest = model.filterRequests(filter);
    view.renderRequests(filteredRequest);
    view.updateStatusLinks(e.target.dataset.value);
}

init();
