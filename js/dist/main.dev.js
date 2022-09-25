"use strict";

// let activeServiceNumber = 1;
var service1 = document.querySelector('#service1');
var service2 = document.querySelector('#service2');
var service3 = document.querySelector('#service3');
var service4 = document.querySelector('#service4');
var serviceInfo1 = document.querySelector('#serviceInfo1');
var serviceInfo2 = document.querySelector('#serviceInfo2');
var serviceInfo3 = document.querySelector('#serviceInfo3');
var serviceInfo4 = document.querySelector('#serviceInfo4'); // --Helpers Functions

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
}; // --Event Listeners


service1.addEventListener('click', showService1);
service2.addEventListener('click', showService2);
service3.addEventListener('click', showService3);
service4.addEventListener('click', showService4);