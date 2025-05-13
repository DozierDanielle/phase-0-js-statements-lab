// Initial variables
const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Temperature control
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// Light control
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// Soil moisture adjustment
while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}
