const weather = {
  temperature: 0,
  humidity: 70,
  windSpeed: 10,

  isFreezing(temp) {
    return temp < 0;
  },
};

const inputTemperature = Number(prompt("Введіть температуру:"));

if (weather.isFreezing(inputTemperature)) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура вище або дорівнює 0 градусів Цельсія");
}
