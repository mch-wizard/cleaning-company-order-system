let firstService = document.querySelector('#firstService');
let secondService = document.querySelector('#secondService');
let thirdService = document.querySelector('#thirdService');
let fourthService = document.querySelector('#fourthService');

let additionalBasicServBox = document.querySelector('#firstService-additional');
let additionalServicesBoxFourthService = document.querySelector('#fourthService-additional')

let shoppingCart = document.querySelector('#cart-box');
let label = document.querySelector('#cart-label');

let summaryInfo = document.querySelector('#summary-info-box');
let summaryLabel = document.querySelector('#summary-label');

let appStorage = JSON.parse(localStorage.getItem('data')) || [];

// Generate First Service function
let generateFirstService = () => {
    const filterQuery = { category: "Sprzątanie podstawowe" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (firstService.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="order-quantity">
                <h3 class="order-quantity__title">${name}:</h3>
                <div class="quantity-buttons">
                    <button onclick="decrement(${id})" class="quantity-buttons__button"> - </button> 
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <button onclick="increment(${id})" class="quantity-buttons__button"> + </button>
                </div>
            </div>
            `;
        })
        .join(''));
};

generateFirstService();

// Generate Additional Basic Services Box function
let generateAdditionalBasicServBox = () => {
    const filterQuery = { category: "Sprzątanie podstawowe - usługa dodatkowa" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (additionalBasicServBox.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="additional-services-item">
                <h3 class="additional-services-item__title">${name}</h3>
                <div class="additional-services-info">
                    <div class="additional-services-info__img"></div>
                    <p class="additional-services-info__price">${price} zł</p>
                </div>
                <div class="quantity-buttons">
                    <button onclick="decrement(${id})" class="quantity-buttons__button additional-services-button"> - </button> 
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <button onclick="increment(${id})" class="quantity-buttons__button additional-services-button"> + </button>
                </div>
            </div>
            `;
        })
        .join(''));
};

generateAdditionalBasicServBox();

// Generate Second Service function
let generateSecondService = () => {
    const filterQuery = { category: "Pranie chemiczne" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (secondService.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="order-quantity">
                <h3 class="order-quantity__title">${name}:</h3>
                <div class="quantity-buttons">
                    <button onclick="decrement(${id})" class="quantity-buttons__button"> - </button> 
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <button onclick="increment(${id})" class="quantity-buttons__button"> + </button>
                </div>
                <p class="order-quantity__price">${price} zł</p>
            </div>
            `;
        })
        .join(''));
};

generateSecondService();

// Generate Third Service function
let generateThirdService = () => {
    const filterQuery = { category: "Mobilne sprzątanie samochodu" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (thirdService.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="order-quantity">
                <h3 class="order-quantity__title">${name}:</h3>
                <div class="quantity-buttons">
                    <button onclick="decrement(${id})" class="quantity-buttons__button"> - </button> 
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <button onclick="increment(${id})" class="quantity-buttons__button"> + </button>
                </div>
            </div>
            `;
        })
        .join(''));
};

generateThirdService();

// Generate Fourth Service function
let generateFourthService = () => {
    const filterQuery = { category: "Sprzątanie nagrobków" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (fourthService.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="order-package">
                <h3 class="order-package__title">${name}</h3>
                <p class="order-package__price">${price} zł</p>
                <div class="package-description">
                    <h3 class="package-description__title">Zakres obejmuje:</h3>
                    <ul class="package-description-info">
                        <li class="package-description-info__item">1 nagrobek</li>
                        <li class="package-description-info__item">usuwanie wypalonych zniczy</li>
                        <li class="package-description-info__item">usuwanie zwiędłych kwiatów</li>
                        <li class="package-description-info__item">grabanie liści</li>
                        <li class="package-description-info__item">wyrzucenie śmieci</li>
                        <li class="package-description-info__item">impregnacja specjalnym środkiem</li>
                    </ul>
                </div>
                <p class="order-package__info-quantity">Podaj ilość:</p>
                <div class="quantity-buttons">
                    <button onclick="decrement(${id})" class="quantity-buttons__button"> - </button> 
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <button onclick="increment(${id})" class="quantity-buttons__button"> + </button>
                </div>
            </div>
            `;
        })
        .join(''));
};

generateFourthService();

// Generate Additional Basic Services Box function
let generateAdditionalServicesBoxFourthService = () => {
    const filterQuery = { category: "Sprzątanie nagrobków - usługa dodatkowa" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (additionalServicesBoxFourthService.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="additional-services-item">
                <h3 class="additional-services-item__title">${name}</h3>
                <div class="additional-services-info">
                    <div class="additional-services-info__img"></div>
                    <p class="additional-services-info__price">${price} zł</p>
                </div>
                <div class="quantity-buttons">
                    <button onclick="decrement(${id})" class="quantity-buttons__button additional-services-button"> - </button> 
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <button onclick="increment(${id})" class="quantity-buttons__button additional-services-button"> + </button>
                </div>
            </div>
            `;
        })
        .join(''));
};

generateAdditionalServicesBoxFourthService();

// Generate Cart Items function
let generateCartItems = () => {
    if (appStorage.length !== 0) {
        return (shoppingCart.innerHTML = appStorage
            .map(x => {
                let { id } = x;
                let search = orderItemsData.find(x => x.id === id) || [];

                console.log(search)
                return `
                    <div class="cart-item">
                        <h4 class="item-title">${search.category} - ${search.name}</h4>
                        <p class="item-price">${search.price} zł</p>
                    </div>
                `;
            })
            .join(''));
    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
            <h3>Nie wybrano usługi</h3>
        `
    };
};

generateCartItems();

// Generate Summary Items function
let generateSummaryItems = () => {
    if (appStorage.length !== 0) {
        return (summaryInfo.innerHTML = appStorage
            .map(x => {
                let { id } = x;
                let search = orderItemsData.find(x => x.id === id) || [];
                return `
                    <div class="cart-item">
                        <p class="cart-item__title">${search.category} - ${search.name}:</p>
                        <p class="cart-item__price">${search.price} zł</p>
                    </div>
                `;
            })
            .join(''));
    } else {
        summaryInfo.innerHTML = ``;
        summaryLabel.innerHTML = `
            <h3>Nie wybrano usługi</h3>
        `
    };
};

generateSummaryItems();

// other increment function
let otherIncrement = id => {
    let selectedItem = id;
    let search = appStorage.find(x => x.id === selectedItem.id);

    if (search === undefined) {
        appStorage.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    };

    console.log(appStorage);

    generateCartItems();
    generateSummaryItems();

    update(selectedItem.id);
    localStorage.setItem('data', JSON.stringify(appStorage))
};

// increment function
let increment = id => {
    let selectedItem = id;
    let search = appStorage.find(x => x.id === selectedItem.id);

    if (search === undefined) {
        appStorage.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    };

    console.log(appStorage);

    generateCartItems();
    generateSummaryItems();

    update(selectedItem.id);
    localStorage.setItem('data', JSON.stringify(appStorage))
};

// decrement function
let decrement = id => {
    let selectedItem = id;
    let search = appStorage.find(x => x.id === selectedItem.id)

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    };

    update(selectedItem.id);
    appStorage = appStorage.filter(x => x.item !== 0)

    console.log(appStorage);

    generateCartItems();
    generateSummaryItems();
    localStorage.setItem('data', JSON.stringify(appStorage));

};

// update function
let update = id => {
    let search = appStorage.find(x => x.id === id);

    console.log(search.item);

    document.getElementById(id).innerHTML = search.item;

    totalAmount();
};

// clear cart function
let clearCart = () => {
    appStorage = [];
    generateCartItems();
    generateSummaryItems();
    generateFirstService();
    generateAdditionalBasicServBox();
    generateSecondService();
    generateThirdService();
    generateFourthService();
    generateAdditionalServicesBoxFourthService();
    localStorage.setItem('data', JSON.stringify(appStorage));
};

// Total Amount function
let totalAmount = () => {
    if (appStorage.length !== 0) {
        let amount = appStorage
            .map(x => {
                let { item, id } = x;
                let search = orderItemsData.find(y => y.id === id) || [];

                return item * search.price;
            })
            .reduce((x, y) => x + y, 0);
        
        console.log(amount);

        let roundedAmount = amount.toFixed(2);

        label.innerHTML = `
        <div class="selected-payment">
            <input type="hidden" id="selected-payment" name="selected-payment" value="Płatność gotówką na miejscu">
            <label for="selected-payment">Płatność gotówką na miejscu</label>
        </div>
        <div class="cart-summary-box">
            <h4 class="cart-summary-box__info">Do zapłaty:</h4>
            <h4 class="cart-summary-box__value">${roundedAmount} zł</h4>
        </div>
        <button onclick="clearCart()" class="removeAll">Usuń wszystko</button>
        `;

        summaryLabel.innerHTML = `
        <div class="selected-payment">
            <input type="hidden" id="selected-payment" name="selected-payment" value="Płatność gotówką na miejscu">
            <label for="selected-payment">Płatność gotówką na miejscu</label>
        </div>
        <div class="cart-summary-box">
            <h4 class="cart-summary-box__info">Do zapłaty:</h4>
            <h4 class="cart-summary-box__value">${roundedAmount} zł</h4>
        </div>
        <button onclick="clearCart()" class="removeAll">Usuń wszystko</button>
        `;
    } else return;
};

totalAmount();