const products = [{
        title: "Синяя парка",
        tags: [""],
        price: 7500,
        size: ["XXS", "XS", "S", "M", "L"],
        colors: "",
        img: "./img/Products/парка.jpg",
    },
    {
        title: "Белая куртка",
        tags: ["new"],
        price: 7500,
        size: ["XXS", "XS", "S", "M", "L"],
        colors: "",
        img: "./img/Products/куртка.jpg",
    },
    {
        title: "Бежевая шуба",
        tags: [""],
        price: 10900,
        size: ["XS", "S", 'L'],
        colors: "",
        img: "./img/Products/шуба.jpg",
    },
    {
        title: "Кремовое пальто",
        tags: [""],
        price: 8200,
        size: ["XS", "M", "L"],
        colors: "",
        img: "./img/Products/Кремовое_пальто.jpg",
    },
    {
        title: "Белая куртка",
        tags: ["new"],
        price: 7500,
        size: ["XXS", "XS", "S", "M", "L"],
        colors: "",
        img: "./img/Products/куртка.jpg",
    },
    {
        title: "Синее пальто",
        tags: [""],
        price: 8200,
        size: ["XS", "M", "L"],
        colors: "",
        img: "./img/Products/пальто.jpg",
    },
    {
        title: "Бежевая шуба",
        tags: [""],
        price: 10900,
        size: ["XS", "S", 'L'],
        colors: "",
        img: "./img/Products/шуба.jpg",
    },
    {
        title: "Синяя парка",
        tags: ["new"],
        price: 7500,
        size: ["XXS", "XS", "S", "M", "L"],
        colors: "",
        img: "./img/Products/парка.jpg",
    },
    {
        title: "Кремовое пальто",
        tags: [""],
        price: 8200,
        size: ["XS", "M", "L"],
        colors: "",
        img: "./img/Products/Кремовое_пальто.jpg",
    },
    {
        title: "Синее пальто",
        tags: [""],
        price: 8200,
        size: ["XS", "M", "L"],
        colors: "",
        img: "./img/Products/пальто.jpg",
    },
    {
        title: "Белая куртка",
        tags: ["new"],
        price: 7500,
        size: ["XXS", "XS", "S", "M", "L"],
        colors: "",
        img: "./img/Products/куртка.jpg",
    },
    {
        title: "Бежевая шуба",
        tags: [""],
        price: 10900,
        size: ["XS", "S", 'L'],
        colors: "",
        img: "./img/Products/шуба.jpg",
    }
    // {
    //     title: "",
    //     tags: [""],
    //     price: "",
    //     size: ["", "", ],
    //     colors: "",
    //     img: "",
    // }
];

let currentState = [...products];

const itemsContainer = document.querySelector(".shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

function renderItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";
    arr.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    })
    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

// function sortByAlphabet(a, b) {
//     if (a.title > b.title) {
//         return 1;
//     }
//     if (a.title < b.title) {
//         return -1;
//     }
//     return 0;
// }

// renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

renderItems(products);

function prepareShopItem(shopItem) {
    const { title, size, tags, img, price } = shopItem;
    const item = itemTemplate.content.cloneNode(true);

    item.querySelector("#shop-title").textContent = title;
    item.querySelector("#shop-size").textContent = size;
    item.querySelector("#shop-image").src = img;
    item.querySelector("#shop-price").textContent = `${price} р.`;

    const tagsHolder = item.querySelector("#shop-tag");
    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        element.classList.add("tag");
        tagsHolder.append(element);
    })
    return item;
}

const searchInput = document.querySelector(".header__user-search");
const searchInputMenu = document.querySelector(".header__menu-search");

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();
    const searchStringMenu = searchInputMenu.value.trim().toLowerCase();
    currentState = products.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );
    currentState = products.filter((el) =>
        el.title.toLowerCase().includes(searchStringMenu)
    );
    
    renderItems(currentState);
    header.classList.remove("open");
}

searchInput.addEventListener("search", applySearch);
searchInputMenu.addEventListener("search", applySearch);