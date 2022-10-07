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
  name: "Pranie wykładziny (zł/m2)",
  price: "5.00"
}, {
  id: "mss000001",
  category: "Mobilne sprzątanie samochodu",
  name: "Samochód",
  price: "60.00"
}, {
  id: "mss000002",
  category: "Mobilne sprzątanie samochodu",
  name: "Bus",
  price: "130.00"
}, {
  id: "mss000003",
  category: "Mobilne sprzątanie samochodu",
  name: "Ciągnik siodłowy",
  price: "80.00"
}, {
  id: "mssd000001",
  category: "Mobilne sprzątanie samochodu - usługa dodatkowa",
  name: "Czyszczenie tapicerki skórzanej",
  img: "images/icons-car-cleaning/car-seat.png",
  price: "140.00"
}, {
  id: "mssd000002",
  category: "Mobilne sprzątanie samochodu - usługa dodatkowa",
  name: "Pranie dywaników",
  img: "images/icons-car-cleaning/cleaning.png",
  price: "100.00"
}, {
  id: "mssd000003",
  category: "Mobilne sprzątanie samochodu - usługa dodatkowa",
  name: "Pranie tapicerki",
  img: "images/icons-car-cleaning/seat-vacuum.png",
  price: "200.00"
}, {
  id: "sn000001",
  category: "Sprzątanie nagrobków",
  name: "Pakiet Podstawowy",
  price: "79.00",
  quantity: "1 nagrobek",
  service1: "Usuwanie wypalonych zniczy",
  service2: "Usuwanie zwiędłych kwiatów",
  service3: "Obmiatanie nagrobka",
  service4: "Grabienie liści",
  service5: "Wyrywanie chwastów",
  service6: "Porządkowanie wokół nagrobka",
  service7: "Zapalenie znicza przy każdej wizycie",
  service8: "Odświeżamy pomnik"
}, {
  id: "sn000002",
  category: "Sprzątanie nagrobków",
  name: "Pakiet Premium",
  price: "99.00",
  service9: "Usługi z pakietu podstawowego +",
  service10: "Kompleksowe mycie całego pomnika ciepłą wodą z profesjonalnymi środkami bezpiecznymi dla kamienia",
  service11: "Mycie zniczy jeśli są w dobrej kondycji",
  service12: "Pielęgnacja zieleni wokół nagrobka"
}, {
  id: "sn000003",
  category: "Sprzątanie nagrobków",
  name: "Pakiet Złoty",
  price: "200.00",
  service13: "Usługi z pakietu podstawowego i premium +",
  service14: "Pastowanie i polerowanie całego nagrobka",
  service15: "Impregnacja profesjonalnymi środkami chroniącymi kamień przed warunkami atmosferycznymi np. kwaśne deszcze, nagła zmiana temperatury"
}, {
  id: "snd000001",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Zapalenie znicza - mały",
  img: "images/icons-tombstones-cleaning/candle.png",
  price: "10.00"
}, {
  id: "snd000002",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Zapalenie znicza - średni",
  img: "images/icons-tombstones-cleaning/candles.png",
  price: "20.00"
}, {
  id: "snd000003",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Zapalenie znicza - duży",
  img: "images/icons-tombstones-cleaning/candles-big.png",
  price: "40.00"
}, {
  id: "snd000004",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Kwiaty żywe - mały",
  img: "images/icons-tombstones-cleaning/bouquet-of-daisys.png",
  price: "60.00"
}, {
  id: "snd000005",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Kwiaty żywe - średni",
  img: "images/icons-tombstones-cleaning/flowers.png",
  price: "110.00"
}, {
  id: "snd000006",
  category: "Sprzątanie nagrobków - usługa dodatkowa",
  name: "Kwiaty żywe - duży",
  img: "images/icons-tombstones-cleaning/flower-bouquet.png",
  price: "200.00"
}, {
  id: "spd000001",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie piekarnika",
  img: "images/icons-basic-cleaning/oven.png",
  price: "35.00"
}, {
  id: "spd000002",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie naczyń",
  img: "images/icons-basic-cleaning/dish.png",
  price: "20.00"
}, {
  id: "spd000003",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie mikrofali",
  img: "images/icons-basic-cleaning/microwave.png",
  price: "15.00"
}, {
  id: "spd000004",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Dodatkowe godziny",
  img: "images/icons-basic-cleaning/add.png",
  price: "40.00"
}, {
  id: "spd000005",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie okapu",
  img: "images/icons-basic-cleaning/extractor-hood.png",
  price: "35.00"
}, {
  id: "spd000006",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie lodówki",
  img: "images/icons-basic-cleaning/refrigerator.png",
  price: "30.00"
}, {
  id: "spd000007",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Mycie okna",
  img: "images/icons-basic-cleaning/window-cleaning.png",
  price: "25.00"
}, {
  id: "spd000008",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Porządek i czyszczenie wnętrza szafy",
  img: "images/icons-basic-cleaning/closet.png",
  price: "35.00"
}, {
  id: "spd000009",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Sprzątanie balkonu",
  img: "images/icons-basic-cleaning/balcony.png",
  price: "20.00"
}, {
  id: "spd000010",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Prasowanie",
  img: "images/icons-basic-cleaning/iron.png",
  price: "35.00"
}, {
  id: "spd000011",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Wynajem odkurzacza",
  img: "images/icons-basic-cleaning/vacuum.png",
  price: "15.00"
}, {
  id: "spd000012",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Sprzątanie wewnątrz szafek kuchennych",
  img: "images/icons-basic-cleaning/kitchen.png",
  price: "45.00"
}, {
  id: "spd000013",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Czyszczenie kuchenki / płyty indukcyjnej",
  img: "images/icons-basic-cleaning/stove.png",
  price: "15.00"
}, {
  id: "spd000014",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Sprzątanie garderoby",
  img: "images/icons-basic-cleaning/wardrobe.png",
  price: "15.00"
}, {
  id: "spd000015",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Czyszczenie drzwi wejściowych",
  img: "images/icons-basic-cleaning/door.png",
  price: "15.00"
}, {
  id: "spd000016",
  category: "Sprzątanie podstawowe - usługa dodatkowa",
  name: "Sprzątanie kuwety",
  img: "images/icons-basic-cleaning/litter-box.png",
  price: "30.00"
}];