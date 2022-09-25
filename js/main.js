// let activeServiceNumber = 1;

const service1 = document.querySelector('#service1');
const service2 = document.querySelector('#service2');
const service3 = document.querySelector('#service3');
const service4 = document.querySelector('#service4');

const serviceInfo1 = document.querySelector('#serviceInfo1');
const serviceInfo2 = document.querySelector('#serviceInfo2');
const serviceInfo3 = document.querySelector('#serviceInfo3');
const serviceInfo4 = document.querySelector('#serviceInfo4');

// --Helpers Functions
let hideActiveService = () => {
    let activeService = document.querySelector('.active-service')
    activeService.classList.remove('active-service')

    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

// --Show Service Functions
let showService1 = () => {
    hideActiveService();
    serviceInfo1.classList.add('active');
    service1.classList.add('active-service');
};

let showService2 = () => {
    hideActiveService();
    serviceInfo2.classList.add('active');
    service2.classList.add('active-service');
};

let showService3 = () => {
    hideActiveService();
    serviceInfo3.classList.add('active');
    service3.classList.add('active-service');
};

let showService4 = () => {
    hideActiveService();
    serviceInfo4.classList.add('active');
    service4.classList.add('active-service');
};


// --Event Listeners
service1.addEventListener('click', showService1);
service2.addEventListener('click', showService2);
service3.addEventListener('click', showService3);
service4.addEventListener('click', showService4);
