const service1 = document.querySelector('#service1');
const service2 = document.querySelector('#service2');
const service3 = document.querySelector('#service3');
const service4 = document.querySelector('#service4');

const serviceInfo1 = document.querySelector('#serviceInfo1');
const serviceInfo2 = document.querySelector('#serviceInfo2');
const serviceInfo3 = document.querySelector('#serviceInfo3');
const serviceInfo4 = document.querySelector('#serviceInfo4');

const serviceInfoBoxS1 = document.querySelector('#service-info-box-s1');
const serviceInfoBoxS2 = document.querySelector('#service-info-box-s2');
const serviceInfoBoxS3 = document.querySelector('#service-info-box-s3');
const serviceInfoBoxS4 = document.querySelector('#service-info-box-s4');

const infoBtnS1 = document.querySelector('#button-info-s1');
const infoBtnS2 = document.querySelector('#button-info-s2');
const infoBtnS3 = document.querySelector('#button-info-s3');
const infoBtnS4 = document.querySelector('#button-info-s4');

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


// show service info s1
let showServiceInfoS1 = () => {
    serviceInfoBoxS1.classList.toggle('active-service-info')
    
    const initialText = 'więcej';

    if (infoBtnS1.textContent.includes(initialText)) {
        infoBtnS1.textContent = 'mniej';
    } else {
        infoBtnS1.textContent = initialText;
    }
};

// show service info s2
let showServiceInfoS2 = () => {
    serviceInfoBoxS2.classList.toggle('active-service-info')
    
    const initialText = 'więcej';

    if (infoBtnS2.textContent.includes(initialText)) {
        infoBtnS2.textContent = 'mniej';
    } else {
        infoBtnS2.textContent = initialText;
    }
};

// show service info s3
let showServiceInfoS3 = () => {
    serviceInfoBoxS3.classList.toggle('active-service-info')
    
    const initialText = 'więcej';

    if (infoBtnS3.textContent.includes(initialText)) {
        infoBtnS3.textContent = 'mniej';
    } else {
        infoBtnS3.textContent = initialText;
    }
};

// show service info s4
let showServiceInfoS4 = () => {
    serviceInfoBoxS4.classList.toggle('active-service-info')
    
    const initialText = 'więcej';

    if (infoBtnS4.textContent.includes(initialText)) {
        infoBtnS4.textContent = 'mniej';
    } else {
        infoBtnS4.textContent = initialText;
    }
};


// --Event Listeners
service1.addEventListener('click', showService1);
service2.addEventListener('click', showService2);
service3.addEventListener('click', showService3);
service4.addEventListener('click', showService4);

infoBtnS1.addEventListener('click', showServiceInfoS1);
infoBtnS2.addEventListener('click', showServiceInfoS2);
infoBtnS3.addEventListener('click', showServiceInfoS3);
infoBtnS4.addEventListener('click', showServiceInfoS4);
