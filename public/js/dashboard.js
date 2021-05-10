const title = document.querySelectorAll('#subTitle');
const iconDiv = document.querySelectorAll("#iconDiv");
const subs = document.querySelectorAll('#subInfo');
let myFuncCalls = 0;

for (i = 0; i < title.length; i++) {
    const firstLetter = title[i].innerHTML.charAt(0)
    iconDiv[i].append(firstLetter)
}

const dropDown = async () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* function filterAlphaHandler(arg, sel, elem) {
    /* const titles = [];
    for (i = 0; i < title.length; i++) {
        titles.push(title[i].innerHTML);
    }
    const $selector = $(sel),
        $element = $selector.children(elem);
    $element.sort(function (a, b) {
        const an = (a.getAttribute(arg)),
            bn = (b.getAttribute(arg));
        if (an > bn) {
            return 1;
        } if (an > bn) {
            return -1;
        }
        return 0;
    });
    $element.detach().appendTo($selector);

} */

const filterPriceHandler = async (arg, sel, elem, order) => {
    const $selector = $(sel);
    if (myFuncCalls >= 1) {
        $element = $selector.children(elem);
    } else {
        $element = $selector.children().children(elem);
    }
    $element.sort(function (a, b) {
        const an = parseInt(a.getAttribute(arg)),
            bn = parseInt(b.getAttribute(arg));
        if (order == "asc") {
            if (an > bn)
                return 1;
            if (an < bn)
                return -1;
        } else if (order == "desc") {
            if (an < bn)
                return 1;
            if (an > bn)
                return -1;
        }
        return 0;
    });
    $element.detach().appendTo($selector);
    myFuncCalls++;
}

const filterPriceHandlerAfterFirst = async (arg, sel, elem, order) => {
    const $selector = $(sel),
        $element = $selector.children(elem);
    $element.sort(function (a, b) {
        const an = parseInt(a.getAttribute(arg)),
            bn = parseInt(b.getAttribute(arg));
        if (order == "asc") {
            if (an > bn)
                return 1;
            if (an < bn)
                return -1;
        } else if (order == "desc") {
            if (an < bn)
                return 1;
            if (an > bn)
                return -1;
        }
        return 0;
    });
    $element.detach().appendTo($selector);
}

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
};

/* document
    .querySelector('#alphatical')
    .addEventListener('click', function () { filterAlphaHandler("data-title", "div#subCardBody", "div") }); */

document
    .querySelector('.dropbtn')
    .addEventListener('click', dropDown);

document
    .querySelector('#lowToHigh')
    .addEventListener('click', function () { filterPriceHandler("data-category", "div#subCardBody", "div.substers", "asc") });

document
    .querySelector('#highToLow')
    .addEventListener('click', function () { filterPriceHandler("data-category", "div#subCardBody", "div.substers", "desc") });

document
    .querySelector('#logoutBtn')
    .addEventListener('click', logout);
