"use strict";

var service1 = document.querySelector('#service1');
var service2 = document.querySelector('#service2');
var service3 = document.querySelector('#service3');
var service4 = document.querySelector('#service4');
var serviceInfo1 = document.querySelector('#serviceInfo1');
var serviceInfo2 = document.querySelector('#serviceInfo2');
var serviceInfo3 = document.querySelector('#serviceInfo3');
var serviceInfo4 = document.querySelector('#serviceInfo4');
var serviceInfoBoxS1 = document.querySelector('#service-info-box-s1');
var serviceInfoBoxS2 = document.querySelector('#service-info-box-s2');
var serviceInfoBoxS3 = document.querySelector('#service-info-box-s3');
var serviceInfoBoxS4 = document.querySelector('#service-info-box-s4');
var infoBtnS1 = document.querySelector('#button-info-s1');
var infoBtnS2 = document.querySelector('#button-info-s2');
var infoBtnS3 = document.querySelector('#button-info-s3');
var infoBtnS4 = document.querySelector('#button-info-s4'); // --Helpers Functions

var hideActiveService = function hideActiveService() {
  var activeService = document.querySelector('.active-service');
  activeService.classList.remove('active-service');
  var activeElement = document.querySelector('.active');
  activeElement.classList.remove('active');
}; // --Show Service Functions


var showService1 = function showService1() {
  hideActiveService();
  serviceInfo1.classList.add('active');
  service1.classList.add('active-service');
};

var showService2 = function showService2() {
  hideActiveService();
  serviceInfo2.classList.add('active');
  service2.classList.add('active-service');
};

var showService3 = function showService3() {
  hideActiveService();
  serviceInfo3.classList.add('active');
  service3.classList.add('active-service');
};

var showService4 = function showService4() {
  hideActiveService();
  serviceInfo4.classList.add('active');
  service4.classList.add('active-service');
}; // show service info s1


var showServiceInfoS1 = function showServiceInfoS1() {
  serviceInfoBoxS1.classList.toggle('active-service-info');
  var initialText = 'więcej';

  if (infoBtnS1.textContent.includes(initialText)) {
    infoBtnS1.textContent = 'mniej';
  } else {
    infoBtnS1.textContent = initialText;
  }
}; // show service info s2


var showServiceInfoS2 = function showServiceInfoS2() {
  serviceInfoBoxS2.classList.toggle('active-service-info');
  var initialText = 'więcej';

  if (infoBtnS2.textContent.includes(initialText)) {
    infoBtnS2.textContent = 'mniej';
  } else {
    infoBtnS2.textContent = initialText;
  }
}; // show service info s3


var showServiceInfoS3 = function showServiceInfoS3() {
  serviceInfoBoxS3.classList.toggle('active-service-info');
  var initialText = 'więcej';

  if (infoBtnS3.textContent.includes(initialText)) {
    infoBtnS3.textContent = 'mniej';
  } else {
    infoBtnS3.textContent = initialText;
  }
}; // show service info s4


var showServiceInfoS4 = function showServiceInfoS4() {
  serviceInfoBoxS4.classList.toggle('active-service-info');
  var initialText = 'więcej';

  if (infoBtnS4.textContent.includes(initialText)) {
    infoBtnS4.textContent = 'mniej';
  } else {
    infoBtnS4.textContent = initialText;
  }
}; // --Event Listeners


service1.addEventListener('click', showService1);
service2.addEventListener('click', showService2);
service3.addEventListener('click', showService3);
service4.addEventListener('click', showService4);
infoBtnS1.addEventListener('click', showServiceInfoS1);
infoBtnS2.addEventListener('click', showServiceInfoS2);
infoBtnS3.addEventListener('click', showServiceInfoS3);
infoBtnS4.addEventListener('click', showServiceInfoS4);