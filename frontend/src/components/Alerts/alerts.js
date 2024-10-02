
export function successAlert(message) {
    let mainElement = document.getElementById('mainAlertbox');
    if (!mainElement) {
        mainElement = document.createElement('div');
        mainElement.setAttribute('id', 'mainAlertbox');
        document.body.insertBefore(mainElement, document.body.firstChild);
    }
    let newElement = document.createElement('span');
    newElement.setAttribute('id', 'successAlert');
    newElement.textContent = message;
    document.getElementById('mainAlertbox').insertBefore(newElement, document.getElementById('mainAlertbox').firstChild);

    setTimeout(function () {
        newElement.remove();
    }, 3000);

    var removemainElement = setTimeout(function () {
        if (!mainElement.hasChildNodes()) {
            mainElement.remove();
        }
    }, 5000);
}

export function errorAlert(message) {
    let mainElement = document.getElementById('mainAlertbox');
    if (!mainElement) {
        mainElement = document.createElement('div');
        mainElement.setAttribute('id', 'mainAlertbox');
        document.body.insertBefore(mainElement, document.body.firstChild);
    }
    let newElement = document.createElement('span');
    newElement.setAttribute('id', 'errorAlert');
    newElement.textContent = message;
    document.getElementById('mainAlertbox').insertBefore(newElement, document.getElementById('mainAlertbox').firstChild);
    setTimeout(function () {
        newElement.remove();
    }, 3000);

    var removemainElement = setTimeout(function () {
        if (!mainElement.hasChildNodes()) {
            mainElement.remove();
        }
    }, 5000);
}

export function loaderStart(e) {
    let loader = e.target.querySelector('button');
    loader.innerText = 'Please wait...';
    loader.setAttribute('disabled', true);
    loader.style.opacity = 0.5;
}

export function loaderEnd(e) {
    let loader = e.target.querySelector('button');
    loader.innerText = 'Submit';
    loader.removeAttribute('disabled');
    loader.style.opacity = 1;
}
