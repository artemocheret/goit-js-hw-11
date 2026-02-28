const weather = {
  temperature: 0,
  humidity: 70,
  windSpeed: 10,

  checkTemperature(temperature) {
    return temperature < 0;
  },
};

const inputTemperature = Number(prompt("Введіть температуру:"));

weather.temperature = inputTemperature;

if (weather.checkTemperature(inputTemperature)) {
  console.log("Температура нижче 0 градусів Цельсія");
} else {
  console.log("Температура вище або дорівнює 0 градусів Цельсія");
}
