// practice problem 1:
const data = {
  product: "Data",
  price: 450
};
try {
  const result = JSON.parse(data);
  console.log(result);
} catch (error) {
  console.log("Invalid JSON format");
}

// practice problem 2:

function validateInput(input) {
  try {
    if (input.includes("@")) {
      console.log("Email is Valid");
    } else {
      throw new Error("Invalid Email address");
    }
  } catch (error) {
    if (error) {
      console.log(error.message);
    }
  }
}
validateInput("Chandra@gamil.com");

// practice problem 3:
const positionInfo = { role: "CEO", weeklyHours: 1000 };
try {
  const PositionInfoParse = JSON.parse(positionInfo);
  console.log(PositionInfoParse);
} catch (error) {
  console.log("Week Is Over");
}

// practice problem 4:
function stringOnlyParse(Text) {
  try {
    if (Text != null && Text != "" && Text != undefined) {
      console.log("Your Name Is:", Text);
    } else {
      throw new Error("Input Must Be A String");
    }
  } catch (error) {
    console.log(error.message);
  }
}
let text = "Chandra Shekhor Mondal";
stringOnlyParse(text);

// practice problem 5:
function accountDeletion(Name) {
  try {
    if (Name == "Chandra") {
      console.log("Deleting Account");
    } else {
      throw new Error("Failed To Delete Account");
    }

  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Account Deletion Attempt Finished");
  }
}
const NAME = "Chandra";
accountDeletion(NAME);
