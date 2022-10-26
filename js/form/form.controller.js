import getRandomData from './form.test-data.js';
import * as view from './form.view.js';
import * as model from './../model.js';

function init() {
    renderTestData();
    setupIventListeners();
}

function setupIventListeners() {
    view.elements.form.addEventListener('submit', formSubmitHandler);
}

function renderTestData() {
    view.insertTestData(getRandomData());
}

function formSubmitHandler(event) {
    event.preventDefault();
    const formData = view.getFormInput();
    model.addRequest(formData);
    view.clearForm();
    renderTestData();
}

init();
