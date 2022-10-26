import * as model from './../model.js';
import * as view from './edit.view.JS';

function init() {
    const id = getRequestId();
    const request = model.getRequestById(id);
    view.renderRequest(request);
    setupEventListener();
}

function setupEventListener() {
    view.elements.form.addEventListener('submit', formSubmitHandler);
}

function formSubmitHandler(event) {
    event.preventDefault();
    const formData = view.getFormInput();
    model.updateRequest(formData);
    window.location = '/table.html';
}

function getRequestId() {
    const params = new URLSearchParams(window.location.search).get('id');
    return params;
}

init();
