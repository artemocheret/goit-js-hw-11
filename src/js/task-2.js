const weather = {
  temperature: 0,
  humidity: 70,
  windSpeed: 10,

  checkTemperature() {
    this.temperature = Number(prompt("Введіть температуру:"));
    return this.temperature < 0;
  }
};

if (weather.checkTemperature()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура вище або дорівнює 0 градусів Цельсія");
}