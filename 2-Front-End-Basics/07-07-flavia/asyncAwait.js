function putWaterToBoil() {
  console.log("Boil the water");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Water boiled.");
      resolve();
    }, 5000);
  });
}
function getReadyToMakeCoffee() {
  console.log("Grind coffee beans.");
  console.log("Line the basket of your maker with a filter.");
  console.log("Wet the filter and let ir drain into your cup.");
  console.log("Discard the water in the cup.");
  console.log("Measure the ground coffee into the wet filter.");
}

function makeCoffee() {
  console.log("Pour water to wet the ground beans and drain into your cup.");
}

async function prepareCoffee() {
  try {
    await putWaterToBoil();
    getReadyToMakeCoffee();
    makeCoffee();
    console.log("Coffee is ready!");
  } catch (error) {
    console.log(error);
  }
}

prepareCoffee();
