function putWaterToBoil(callback) {
  console.log("Boil the water.");
  setTimeout(() => {
    console.log("Water boiled.");
    callback();
  }, 5000);
}

function getReadyToMakeCoffee(callback) {
  console.log("Grind coffee beans.");
  console.log("Line the basket of your maker with a filter.");
  console.log("Wet the filter and let ir drain into your cup.");
  console.log("Discard the water in the cup.");
  console.log("Measure the ground coffee into the wet filter.");
  callback();
}

function makeCoffee(callback) {
  console.log("Pour water to wet the ground beans and drain into your cup.");
  callback();
}

putWaterToBoil(() => {
  getReadyToMakeCoffee(() => {
    makeCoffee(() => {
      console.log("Coffee is ready!");
    });
  });
});
