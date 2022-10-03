"use strict";

var firstService = document.querySelector('#firstService');
var secondService = document.querySelector('#secondService');
var thirdService = document.querySelector('#thirdService');
var fourthService = document.querySelector('#fourthService');
var additionalBasicServBox = document.querySelector('#firstService-additional');
var additionalServicesBoxFourthService = document.querySelector('#fourthService-additional');
var shoppingCart = document.querySelector('#cart-box');
var label = document.querySelector('#cart-label');
var summaryInfo = document.querySelector('#summary-info-box');
var summaryLabel = document.querySelector('#summary-label');
var orderItemsBox = document.querySelector('#orderItemsBox');
var orderItemsSummary = document.querySelector('#orderItemsSummary');
var appStorage = JSON.parse(localStorage.getItem('data')) || []; // Generate First Service function

var generateFirstService = function generateFirstService() {
  var filterQuery = {
    category: "Sprzątanie podstawowe"
  };
  var filteredData = orderItemsData.filter(function (item) {
    return Object.keys(filterQuery).every(function (key) {
      return item[key] === filterQuery[key];
    });
  });
  console.log(filteredData);
  return firstService.innerHTML = filteredData.map(function (x) {
    var id = x.id,
        category = x.category,
        name = x.name,
        price = x.price;
    var search = appStorage.find(function (x) {
      return x.id === id;
    }) || [];
    return "\n            <div id=service-id-".concat(id, " class=\"order-quantity\">\n                <h3 class=\"order-quantity__title\">").concat(name, ":</h3>\n                <div class=\"quantity-buttons\">\n                    <button onclick=\"decrement(").concat(id, ")\" class=\"quantity-buttons__button\"> - </button> \n                    <div id=").concat(id, " class=\"quantity\">\n                    ").concat(search.item === undefined ? 0 : search.item, "\n                    </div>\n                    <button onclick=\"increment(").concat(id, ")\" class=\"quantity-buttons__button\"> + </button>\n                </div>\n            </div>\n            ");
  }).join('');
};

generateFirstService(); // Generate Additional Basic Services Box function

var generateAdditionalBasicServBox = function generateAdditionalBasicServBox() {
  var filterQuery = {
    category: "Sprzątanie podstawowe - usługa dodatkowa"
  };
  var filteredData = orderItemsData.filter(function (item) {
    return Object.keys(filterQuery).every(function (key) {
      return item[key] === filterQuery[key];
    });
  });
  console.log(filteredData);
  return additionalBasicServBox.innerHTML = filteredData.map(function (x) {
    var id = x.id,
        category = x.category,
        name = x.name,
        price = x.price;
    var search = appStorage.find(function (x) {
      return x.id === id;
    }) || [];
    return "\n            <div id=service-id-".concat(id, " class=\"additional-services-item\">\n                <h3 class=\"additional-services-item__title\">").concat(name, "</h3>\n                <div class=\"additional-services-info\">\n                    <div class=\"additional-services-info__img\"></div>\n                    <p class=\"additional-services-info__price\">").concat(price, " z\u0142</p>\n                </div>\n                <div class=\"quantity-buttons\">\n                    <button onclick=\"decrement(").concat(id, ")\" class=\"quantity-buttons__button additional-services-button\"> - </button> \n                    <div id=").concat(id, " class=\"quantity\">\n                    ").concat(search.item === undefined ? 0 : search.item, "\n                    </div>\n                    <button onclick=\"increment(").concat(id, ")\" class=\"quantity-buttons__button additional-services-button\"> + </button>\n                </div>\n            </div>\n            ");
  }).join('');
};

generateAdditionalBasicServBox(); // Generate Second Service function

var generateSecondService = function generateSecondService() {
  var filterQuery = {
    category: "Pranie chemiczne"
  };
  var filteredData = orderItemsData.filter(function (item) {
    return Object.keys(filterQuery).every(function (key) {
      return item[key] === filterQuery[key];
    });
  });
  console.log(filteredData);
  return secondService.innerHTML = filteredData.map(function (x) {
    var id = x.id,
        category = x.category,
        name = x.name,
        price = x.price;
    var search = appStorage.find(function (x) {
      return x.id === id;
    }) || [];
    return "\n            <div id=service-id-".concat(id, " class=\"order-quantity\">\n                <h3 class=\"order-quantity__title\">").concat(name, ":</h3>\n                <div class=\"quantity-buttons\">\n                    <button onclick=\"decrement(").concat(id, ")\" class=\"quantity-buttons__button\"> - </button> \n                    <div id=").concat(id, " class=\"quantity\">\n                    ").concat(search.item === undefined ? 0 : search.item, "\n                    </div>\n                    <button onclick=\"increment(").concat(id, ")\" class=\"quantity-buttons__button\"> + </button>\n                </div>\n                <p class=\"order-quantity__price\">").concat(price, " z\u0142</p>\n            </div>\n            ");
  }).join('');
};

generateSecondService(); // Generate Third Service function

var generateThirdService = function generateThirdService() {
  var filterQuery = {
    category: "Mobilne sprzątanie samochodu"
  };
  var filteredData = orderItemsData.filter(function (item) {
    return Object.keys(filterQuery).every(function (key) {
      return item[key] === filterQuery[key];
    });
  });
  console.log(filteredData);
  return thirdService.innerHTML = filteredData.map(function (x) {
    var id = x.id,
        category = x.category,
        name = x.name,
        price = x.price;
    var search = appStorage.find(function (x) {
      return x.id === id;
    }) || [];
    return "\n            <div id=service-id-".concat(id, " class=\"order-quantity\">\n                <h3 class=\"order-quantity__title\">").concat(name, ":</h3>\n                <div class=\"quantity-buttons\">\n                    <button onclick=\"decrement(").concat(id, ")\" class=\"quantity-buttons__button\"> - </button> \n                    <div id=").concat(id, " class=\"quantity\">\n                    ").concat(search.item === undefined ? 0 : search.item, "\n                    </div>\n                    <button onclick=\"increment(").concat(id, ")\" class=\"quantity-buttons__button\"> + </button>\n                </div>\n            </div>\n            ");
  }).join('');
};

generateThirdService(); // Generate Fourth Service function

var generateFourthService = function generateFourthService() {
  var filterQuery = {
    category: "Sprzątanie nagrobków"
  };
  var filteredData = orderItemsData.filter(function (item) {
    return Object.keys(filterQuery).every(function (key) {
      return item[key] === filterQuery[key];
    });
  });
  console.log(filteredData);
  return fourthService.innerHTML = filteredData.map(function (x) {
    var id = x.id,
        category = x.category,
        name = x.name,
        price = x.price;
    var search = appStorage.find(function (x) {
      return x.id === id;
    }) || [];
    return "\n            <div id=service-id-".concat(id, " class=\"order-package\">\n                <h3 class=\"order-package__title\">").concat(name, "</h3>\n                <p class=\"order-package__price\">").concat(price, " z\u0142</p>\n                <div class=\"package-description\">\n                    <h3 class=\"package-description__title\">Zakres obejmuje:</h3>\n                    <ul class=\"package-description-info\">\n                        <li class=\"package-description-info__item\">1 nagrobek</li>\n                        <li class=\"package-description-info__item\">usuwanie wypalonych zniczy</li>\n                        <li class=\"package-description-info__item\">usuwanie zwi\u0119d\u0142ych kwiat\xF3w</li>\n                        <li class=\"package-description-info__item\">grabanie li\u015Bci</li>\n                        <li class=\"package-description-info__item\">wyrzucenie \u015Bmieci</li>\n                        <li class=\"package-description-info__item\">impregnacja specjalnym \u015Brodkiem</li>\n                    </ul>\n                </div>\n                <p class=\"order-package__info-quantity\">Podaj ilo\u015B\u0107:</p>\n                <div class=\"quantity-buttons\">\n                    <button onclick=\"decrement(").concat(id, ")\" class=\"quantity-buttons__button\"> - </button> \n                    <div id=").concat(id, " class=\"quantity\">\n                    ").concat(search.item === undefined ? 0 : search.item, "\n                    </div>\n                    <button onclick=\"increment(").concat(id, ")\" class=\"quantity-buttons__button\"> + </button>\n                </div>\n            </div>\n            ");
  }).join('');
};

generateFourthService(); // Generate Additional Basic Services Box function

var generateAdditionalServicesBoxFourthService = function generateAdditionalServicesBoxFourthService() {
  var filterQuery = {
    category: "Sprzątanie nagrobków - usługa dodatkowa"
  };
  var filteredData = orderItemsData.filter(function (item) {
    return Object.keys(filterQuery).every(function (key) {
      return item[key] === filterQuery[key];
    });
  });
  console.log(filteredData);
  return additionalServicesBoxFourthService.innerHTML = filteredData.map(function (x) {
    var id = x.id,
        category = x.category,
        name = x.name,
        price = x.price;
    var search = appStorage.find(function (x) {
      return x.id === id;
    }) || [];
    return "\n            <div id=service-id-".concat(id, " class=\"additional-services-item\">\n                <h3 class=\"additional-services-item__title\">").concat(name, "</h3>\n                <div class=\"additional-services-info\">\n                    <div class=\"additional-services-info__img\"></div>\n                    <p class=\"additional-services-info__price\">").concat(price, " z\u0142</p>\n                </div>\n                <div class=\"quantity-buttons\">\n                    <button onclick=\"decrement(").concat(id, ")\" class=\"quantity-buttons__button additional-services-button\"> - </button> \n                    <div id=").concat(id, " class=\"quantity\">\n                    ").concat(search.item === undefined ? 0 : search.item, "\n                    </div>\n                    <button onclick=\"increment(").concat(id, ")\" class=\"quantity-buttons__button additional-services-button\"> + </button>\n                </div>\n            </div>\n            ");
  }).join('');
};

generateAdditionalServicesBoxFourthService(); // Generate Cart Items function

var generateCartItems = function generateCartItems() {
  if (appStorage.length !== 0) {
    return shoppingCart.innerHTML = appStorage.map(function (x) {
      var id = x.id;
      var search = orderItemsData.find(function (x) {
        return x.id === id;
      }) || [];
      console.log(search);
      return "\n                    <div class=\"cart-item-menu\">\n                        <p class=\"cart-item-menu__title\">".concat(search.category, " - ").concat(search.name, "</p>\n                        <p class=\"cart-item-menu__price\">").concat(search.price, " z\u0142</p>\n                    </div>\n                ");
    }).join('');
  } else {
    shoppingCart.innerHTML = "";
    label.innerHTML = "\n            <h3>Nie wybrano us\u0142ugi</h3>\n        ";
  }

  ;
};

generateCartItems(); // Generate Summary Items function

var generateSummaryItems = function generateSummaryItems() {
  if (appStorage.length !== 0) {
    return summaryInfo.innerHTML = appStorage.map(function (x) {
      var id = x.id;
      var search = orderItemsData.find(function (x) {
        return x.id === id;
      }) || [];
      return "\n                    <div class=\"cart-item\">\n                        <p class=\"cart-item__title\">".concat(search.category, " - ").concat(search.name, ":</p>\n                        <p class=\"cart-item__price\">").concat(search.price, " z\u0142</p>\n                    </div>\n                ");
    }).join('');
  } else {
    summaryInfo.innerHTML = "";
    summaryLabel.innerHTML = "\n            <h3>Nie wybrano us\u0142ugi</h3>\n        ";
  }

  ;
};

generateSummaryItems(); // Generate Form Input Items function

var generateFormInputItems = function generateFormInputItems() {
  if (appStorage.length !== 0) {
    return orderItemsBox.innerHTML = appStorage.map(function (x) {
      var id = x.id;
      var search = orderItemsData.find(function (x) {
        return x.id === id;
      }) || [];
      return "\n                    <input type=\"hidden\" id=\"service-".concat(search.id, "\" \"name=\"").concat(search.category, "\" value=\"").concat(search.name, ": ").concat(search.price, " z\u0142\">\n                ");
    }).join('');
  } else {
    orderItemsSummary.innerHTML = "";
    orderItemsBox.innerHTML = "\n            <input type=\"hidden\" id=\"orderItemForm\" \"name=\"Brak_zam\xF3wienia:\" value=\"Nie wybrano us\u0142ugi\">\n        ";
  }

  ;
};

generateFormInputItems(); // other increment function

var otherIncrement = function otherIncrement(id) {
  var selectedItem = id;
  var search = appStorage.find(function (x) {
    return x.id === selectedItem.id;
  });

  if (search === undefined) {
    appStorage.push({
      id: selectedItem.id,
      item: 1
    });
  } else {
    search.item += 1;
  }

  ;
  console.log(appStorage);
  generateCartItems();
  generateSummaryItems(); // generateFormInputItems();

  update(selectedItem.id);
  localStorage.setItem('data', JSON.stringify(appStorage));
}; // increment function


var increment = function increment(id) {
  var selectedItem = id;
  var search = appStorage.find(function (x) {
    return x.id === selectedItem.id;
  });

  if (search === undefined) {
    appStorage.push({
      id: selectedItem.id,
      item: 1
    });
  } else {
    search.item += 1;
  }

  ;
  console.log(appStorage);
  generateCartItems();
  generateSummaryItems();
  generateFormInputItems();
  update(selectedItem.id);
  localStorage.setItem('data', JSON.stringify(appStorage));
}; // decrement function


var decrement = function decrement(id) {
  var selectedItem = id;
  var search = appStorage.find(function (x) {
    return x.id === selectedItem.id;
  });
  if (search === undefined) return;else if (search.item === 0) return;else {
    search.item -= 1;
  }
  ;
  update(selectedItem.id);
  appStorage = appStorage.filter(function (x) {
    return x.item !== 0;
  });
  console.log(appStorage);
  generateCartItems();
  generateSummaryItems();
  generateFormInputItems();
  localStorage.setItem('data', JSON.stringify(appStorage));
}; // update function


var update = function update(id) {
  var search = appStorage.find(function (x) {
    return x.id === id;
  });
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  totalAmount();
}; // clear cart function


var clearCart = function clearCart() {
  appStorage = [];
  generateCartItems();
  generateSummaryItems();
  generateFormInputItems();
  generateFirstService();
  generateAdditionalBasicServBox();
  generateSecondService();
  generateThirdService();
  generateFourthService();
  generateAdditionalServicesBoxFourthService();
  localStorage.setItem('data', JSON.stringify(appStorage));
}; // Total Amount function


var totalAmount = function totalAmount() {
  if (appStorage.length !== 0) {
    var amount = appStorage.map(function (x) {
      var item = x.item,
          id = x.id;
      var search = orderItemsData.find(function (y) {
        return y.id === id;
      }) || [];
      return item * search.price;
    }).reduce(function (x, y) {
      return x + y;
    }, 0);
    console.log(amount);
    var roundedAmount = amount.toFixed(2);
    label.innerHTML = "\n        <div class=\"selected-payment\">\n            <input type=\"hidden\" id=\"selected-payment\" name=\"selected-payment\" value=\"P\u0142atno\u015B\u0107 got\xF3wk\u0105 na miejscu\">\n            <label for=\"selected-payment\">P\u0142atno\u015B\u0107 got\xF3wk\u0105 na miejscu</label>\n        </div>\n        <div class=\"cart-summary-box\">\n            <h4 class=\"cart-summary-box__info\">Do zap\u0142aty:</h4>\n            <h4 class=\"cart-summary-box__value\">".concat(roundedAmount, " z\u0142</h4>\n        </div>\n        <button onclick=\"clearCart()\" class=\"removeAll\">Usu\u0144 wszystko</button>\n        ");
    summaryLabel.innerHTML = "\n        <div class=\"selected-payment\">\n            <input type=\"hidden\" id=\"selected-payment\" name=\"selected-payment\" value=\"P\u0142atno\u015B\u0107 got\xF3wk\u0105 na miejscu\">\n            <label for=\"selected-payment\">P\u0142atno\u015B\u0107 got\xF3wk\u0105 na miejscu</label>\n        </div>\n        <div class=\"cart-summary-box\">\n            <h4 class=\"cart-summary-box__info\">Do zap\u0142aty:</h4>\n            <h4 class=\"cart-summary-box__value\">".concat(roundedAmount, " z\u0142</h4>\n        </div>\n        <button onclick=\"clearCart()\" class=\"removeAll\">Usu\u0144 wszystko</button>\n        ");
    orderItemsSummary.innerHTML = "\n        <input type=\"hidden\" id=\"orderItemsSummaryForm\" \"name=\"Do_zap\u0142aty:\" value=\"".concat(roundedAmount, " z\u0142\">\n        <input type=\"hidden\" id=\"paymentsForm\" name=\"Spos\xF3b_p\u0142atno\u015B\u0107i:\" value=\"P\u0142atno\u015B\u0107 got\xF3wk\u0105 na miejscu\">\n        ");
  } else return;
};

totalAmount();