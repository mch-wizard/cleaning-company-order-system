"use strict";

var orderItemsData = [{
  id: "sp000001",
  category: "Sprzątanie podstawowe",
  name: "Pokój",
  price: "150.70"
}, {
  id: "sp000002",
  category: "Sprzątanie podstawowe",
  name: "Kuchnia",
  price: "300.00"
}, {
  id: "sp000003",
  category: "Sprzątanie podstawowe",
  name: "Łazienka",
  price: "280.90"
}, {
  id: "dc000001",
  category: "Pranie chemiczne",
  name: "Pranie dywanu",
  price: "40.00"
}, {
  id: "dc000002",
  category: "Pranie chemiczne",
  name: "Pranie kanapy",
  price: "105.00"
}, {
  id: "dc000003",
  category: "Pranie chemiczne",
  name: "Pranie kanapy narożnej",
  price: "125.00"
}, {
  id: "dc000004",
  category: "Pranie chemiczne",
  name: "Pranie materaca z jednej strony",
  price: "40.00"
}, {
  id: "dc000005",
  category: "Pranie chemiczne",
  name: "Pranie materaca z dwóch stron",
  price: "80.00"
}, {
  id: "dc000006",
  category: "Pranie chemiczne",
  name: "Pranie fotela",
  price: "80.00"
}, {
  id: "dc000007",
  category: "Pranie chemiczne",
  name: "Pranie krzesła/ taboretu/ fotela biurowego",
  price: "15.00"
}, {
  id: "dc000008",
  category: "Pranie chemiczne",
  name: "Pranie wykładziny",
  price: "40.00"
}, {
  id: "mss000001",
  category: "Mobilne sprzątanie samochodu",
  name: "Samochód",
  price: "40.00"
}, {
  id: "sn000001",
  category: "Sprzątanie nagrobków",
  name: "Pakiet Podstawowy",
  price: "79.00"
}, {
  id: "sn000002",
  category: "Sprzątanie nagrobków",
  name: "Pakiet Premium",
  price: "99.00"
}, {
  id: "sn000003",
  category: "Sprzątanie nagrobków",
  name: "Pakiet Indywidualny",
  price: "200.00"
}, {
  id: "snd000001",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Zapalenie znicza - mały",
  price: "10.00"
}, {
  id: "snd000002",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Zapalenie znicza - średni",
  price: "20.00"
}, {
  id: "snd000003",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Zapalenie znicza - duży",
  price: "40.00"
}, {
  id: "snd000004",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Kwiaty żywe - mały",
  price: "60.00"
}, {
  id: "snd000005",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Kwiaty żywe - średni",
  price: "110.00"
}, {
  id: "snd000006",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Kwiaty żywe - duży",
  price: "200.00"
}, {
  id: "spd000001",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie piekarnika",
  price: "35.00"
}, {
  id: "spd000002",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie naczyń",
  price: "20.00"
}, {
  id: "spd000003",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie mikrofali",
  price: "15.00"
}, {
  id: "spd000004",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Dodatkowe godziny",
  price: "40.00"
}, {
  id: "spd000005",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie okapu",
  price: "35.00"
}, {
  id: "spd000006",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie lodówki",
  price: "30.00"
}, {
  id: "spd000007",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie okna",
  price: "25.00"
}, {
  id: "spd000008",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Porządek i czyszczenie wnętrza szafy",
  price: "35.00"
}, {
  id: "spd000009",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Sprzątanie balkonu",
  price: "20.00"
}, {
  id: "spd000010",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Prasowanie",
  price: "35.00"
}, {
  id: "spd000011",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Wynajem odkurzacza",
  price: "15.00"
}, {
  id: "spd000012",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Sprzątanie wewnątrz szafek kuchennych",
  price: "45.00"
}, {
  id: "spd000013",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Czyszczenie kuchenki / płyty indukcyjnej",
  price: "15.00"
}, {
  id: "spd000014",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Sprzątanie garderoby",
  price: "15.00"
}, {
  id: "spd000015",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Czyszczenie drzwi wejściowych",
  price: "15.00"
}, {
  id: "spd000016",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Sprzątanie kuwety",
  price: "30.00"
}];