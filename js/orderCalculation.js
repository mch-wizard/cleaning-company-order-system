let firstService = document.querySelector('#firstService');
let secondService = document.querySelector('#secondService');
let thirdService = document.querySelector('#thirdService');
let fourthService = document.querySelector('#fourthService');

let fourthServiceOne = document.querySelector('#fourthServiceOne');
let fourthServiceTwo = document.querySelector('#fourthServiceTwo');
let fourthServiceThree = document.querySelector('#fourthServiceThree');

let additionalBasicServBox = document.querySelector('#firstService-additional');
let additionalThirdServiceBox = document.querySelector('#thirdService-additional')
let additionalServicesBoxFourthService = document.querySelector('#fourthService-additional')

let shoppingCart = document.querySelector('#cart-box');
let label = document.querySelector('#cart-label');

let summaryInfo = document.querySelector('#summary-info-box');
let summaryLabel = document.querySelector('#summary-label');

let orderItemsBox = document.querySelector('#orderItemsBox');
let orderItemsSummary = document.querySelector('#orderItemsSummary');

let form = document.querySelector('#orderForm');

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
            let { id, category, name, img, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="additional-services-item">
                <h3 class="additional-services-item__title">${name}</h3>
                <div class="additional-services-info">
                    <img class="additional-services-info__img" src="${img}" alt="">
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

// Generate Additional Third Service Box function
let generateAdditionalThirdServiceBox = () => {
    const filterQuery = { category: "Mobilne sprzątanie samochodu - usługa dodatkowa" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (additionalThirdServiceBox.innerHTML = filteredData
        .map(x => {
            let { id, category, name, img, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="additional-services-item">
                <h3 class="additional-services-item__title">${name}</h3>
                <div class="additional-services-info">
                    <img class="additional-services-info__img" src="${img}" alt="">
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

generateAdditionalThirdServiceBox();

// Generate Fourth Service function
let generateFourthService = () => {
    const filterQuery = { name: "Pakiet Podstawowy" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (fourthServiceOne.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price, quantity, service1, service2, service3, service4, service5, service6, service7, service8 } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
                <div id=service-id-${id} >
                    <h3 class="order-package__title">${name}</h3>
                    <p class="order-package__price">${price} zł</p>
                    <div class="package-description">
                        <h3 class="package-description__title">Zakres obejmuje:</h3>
                        <ul class="package-description-info">
                            <li class="package-description-info__item">${quantity}</li>
                            <li class="package-description-info__item">${service1}</li>
                            <li class="package-description-info__item">${service2}</li>
                            <li class="package-description-info__item">${service3}</li>
                            <li class="package-description-info__item">${service4}</li>
                            <li class="package-description-info__item">${service5}</li>
                            <li class="package-description-info__item">${service6}</li>
                            <li class="package-description-info__item">${service7}</li>
                            <li class="package-description-info__item">${service8}</li>
                        </ul>
                    </div>
                    <p class="order-package__info-quantity">Podaj ilość:</p>
                    <div class="quantity-buttons">
                        <button onclick="decrement(${id})" class="quantity-buttons__button quantity-buttons__button--modified"> - </button> 
                        <div id=${id} class="quantity">
                        ${search.item === undefined ? 0 : search.item}
                        </div>
                        <button onclick="increment(${id})" class="quantity-buttons__button quantity-buttons__button--modified"> + </button>
                    </div>
                </div>
            `;
            
        })
        .join(''));
};

generateFourthService();

let generateFourthServiceTwo = () => {
    const filterQuery = { name: "Pakiet Premium" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (fourthServiceTwo.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price, service9, service10, service11, service12 } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
                <div id=service-id-${id} >
                    <h3 class="order-package__title">${name}</h3>
                    <p class="order-package__price">${price} zł</p>
                    <div class="package-description">
                        <h3 class="package-description__title">Zakres obejmuje:</h3>
                        <ul class="package-description-info">
                            <li class="package-description-info__item">${service9}</li>
                            <li class="package-description-info__item">${service10}</li>
                            <li class="package-description-info__item">${service11}</li>
                            <li class="package-description-info__item">${service12}</li>
                        </ul>
                    </div>
                    <p class="order-package__info-quantity">Podaj ilość:</p>
                    <div class="quantity-buttons">
                        <button onclick="decrement(${id})" class="quantity-buttons__button quantity-buttons__button--modified"> - </button> 
                        <div id=${id} class="quantity">
                        ${search.item === undefined ? 0 : search.item}
                        </div>
                        <button onclick="increment(${id})" class="quantity-buttons__button quantity-buttons__button--modified"> + </button>
                    </div>
                </div>
            `;
            
        })
        .join(''));
};

generateFourthServiceTwo();

let generateFourthServiceThree = () => {
    const filterQuery = { name: "Pakiet Złoty" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (fourthServiceThree.innerHTML = filteredData
        .map(x => {
            let { id, category, name, price, service13, service14, service15 } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
                <div id=service-id-${id} >
                    <h3 class="order-package__title">${name}</h3>
                    <p class="order-package__price">${price} zł</p>
                    <div class="package-description">
                        <h3 class="package-description__title">Zakres obejmuje:</h3>
                        <ul class="package-description-info">
                            <li class="package-description-info__item">${service13}</li>
                            <li class="package-description-info__item">${service14}</li>
                            <li class="package-description-info__item">${service15}</li>
                        </ul>
                    </div>
                    <p class="order-package__info-quantity">Podaj ilość:</p>
                    <div class="quantity-buttons">
                        <button onclick="decrement(${id})" class="quantity-buttons__button quantity-buttons__button--modified"> - </button> 
                        <div id=${id} class="quantity">
                        ${search.item === undefined ? 0 : search.item}
                        </div>
                        <button onclick="increment(${id})" class="quantity-buttons__button quantity-buttons__button--modified"> + </button>
                    </div>
                </div>
            `;
            
        })
        .join(''));
};

generateFourthServiceThree();

// Generate Additional Basic Services Box function
let generateAdditionalServicesBoxFourthService = () => {
    const filterQuery = { category: "Sprzątanie nagrobków - usługa dodatkowa" };

    const filteredData = orderItemsData.filter(item => Object.keys(filterQuery).every(key => item[key] === filterQuery[key]))
    console.log(filteredData);

    return (additionalServicesBoxFourthService.innerHTML = filteredData
        .map(x => {
            let { id, category, name, img, price } = x;
            let search = appStorage.find(x => x.id === id) || [];
            return `
            <div id=service-id-${id} class="additional-services-item additional-services-item--modified">
                <h3 class="additional-services-item__title">${name}</h3>
                <div class="additional-services-info">
                    <img class="additional-services-info__img" src="${img}" alt="">
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
                    <div class="cart-item-menu">
                        <p class="cart-item-menu__title">${search.category} - ${search.name}</p>
                        <p class="cart-item-menu__price">${search.price} zł</p>
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

// Generate Form Input Items function
let generateFormInputItems = () => {
    if (appStorage.length !== 0) {
        return (orderItemsBox.innerHTML = appStorage
            .map(x => {
                let { id } = x;
                let search = orderItemsData.find(x => x.id === id) || [];
                return `
                    <input type="hidden" id="service-${search.id}" "name="Zamowienie" value="${search.category} - ${search.name}: ${search.price} zł">
                `;
            })
            .join(''));
    } else {
        orderItemsSummary.innerHTML = ``;
        orderItemsBox.innerHTML = ``;
    };
};

generateFormInputItems();

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
    // generateFormInputItems();

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
    generateFormInputItems();
    
    update(selectedItem.id);
    localStorage.setItem('data', JSON.stringify(appStorage))
    window.kwesFormsInitialize();
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
    generateFormInputItems();
    localStorage.setItem('data', JSON.stringify(appStorage));
    window.kwesFormsInitialize()

};

// update function
let update = id => {
    let search = appStorage.find(x => x.id === id);

    console.log(search.item);

    document.getElementById(id).innerHTML = search.item;

    totalAmount();
    window.kwesFormsInitialize()
};

// clear cart function
let clearCart = () => {
    appStorage = [];
    generateCartItems();
    generateSummaryItems();
    generateFormInputItems();
    generateFirstService();
    generateAdditionalBasicServBox();
    generateSecondService();
    generateThirdService();
    generateAdditionalThirdServiceBox();
    generateFourthService();
    generateFourthServiceTwo();
    generateFourthServiceThree();
    generateAdditionalServicesBoxFourthService();
    localStorage.setItem('data', JSON.stringify(appStorage));
    window.kwesFormsInitialize()
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
            <p>Płatność gotówką na miejscu</p>
        </div>
        <div class="cart-summary-box">
            <h4 class="cart-summary-box__info">Do zapłaty:</h4>
            <h4 class="cart-summary-box__value">${roundedAmount} zł</h4>
        </div>
        <button onclick="clearCart()" class="removeAll">Usuń wszystko</button>
        `;

        summaryLabel.innerHTML = `
        <div class="selected-payment">
            <p>Płatność gotówką na miejscu</p>
        </div>
        <div class="cart-summary-box">
            <h4 class="cart-summary-box__info">Do zapłaty:</h4>
            <h4 class="cart-summary-box__value">${roundedAmount} zł</h4>
        </div>
        <button onclick="clearCart()" class="removeAll">Usuń wszystko</button>
        `;

        orderItemsSummary.innerHTML = `
        <input type="hidden" id="orderItemsSummaryForm" "name="Do_zaplaty" value="${roundedAmount} zł">
        <input type="hidden" id="paymentsForm" name="Sposob_platnosci" value="Płatność gotówką na miejscu">
        `;
    } else return;
};

totalAmount();

// How to properly add window.kwesFormsInitialize ()?
// form.addEventListener('Loading', window.kwesFormsInitialize())
