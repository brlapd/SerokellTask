

function submitContactForm() {
    var _form = document.getElementById('contact-form');
    var _serialize = {
        name: _form.querySelector("input[name='name']").value,
        email: _form.querySelector("input[name='email']").value,
        message: _form.querySelector("textarea[name='message']").value
    };
    console.log('Form Datas', _serialize);

    return false;
}

function toggleBody(_class) {
    var _body = document.querySelector('body');
    var _hasClass = _body.classList.contains(_class);
    if (_hasClass) {
        _body.classList.remove(_class);
    }
    else {
        _body.classList.add(_class);
    }
}