import * as React from 'react';
import * as ReactDOM from 'react-dom';

window.addEventListener('load', () => {
    ReactDOM.hydrate(<Header />, document.getElementbyId('react-root')); //hydrate - подключил разметку к уже имеющейся, render - заменить на указанную
});