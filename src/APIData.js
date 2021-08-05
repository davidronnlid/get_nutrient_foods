import { useEffect, useState } from "react";

export default function APIData() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [nutrientData, setnutrientData] = useState({
    unit: [],
    nutrient: "",
    listOfFoodsAndAmounts: [],
  });

  useEffect(() => {
    fetch(
      "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=kElZde0j2wqbh5q9JzGWcMn7Uubj8hsBH8YLFwlv"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let orderedListOfNutrientAmounts = [];

          orderedListOfNutrientAmounts = result.map((elm) =>
            elm.foodNutrients
              .filter((elm) => elm.number === "304")
              .map((elm) => elm.amount)
          );
          // Set magnesium amounts as values in an arr

          orderedListOfNutrientAmounts = orderedListOfNutrientAmounts
            .map((arr) => arr[0])
            .sort((a, b) => b - a);
          // Order list of magnesium amounts by amount of magnesium

          let nutrient = result.map((elm) =>
            elm.foodNutrients
              .filter((elm) => elm.number === "304")
              .map((elm) => elm.name)
          )[0][0];
          // Set nutrient name to magnesium

          let unit = result.map((elm) =>
            elm.foodNutrients
              .filter((elm) => elm.number === "304")
              .map((elm) => elm.unitName.toLowerCase())
          );
          // For each food, extract the unit of measurement of magnesium and add this to arr ordered by amount of magnesium

          let orderedListOfNutrientFoods = result.sort(callback);

          function callback(a, b) {
            return (
              b.foodNutrients.filter((obj) => obj.number === "304")[0].amount -
              a.foodNutrients.filter((obj) => obj.number === "304")[0].amount
            );
          }

          orderedListOfNutrientFoods = orderedListOfNutrientFoods.map(
            (elm) => elm.description
          );
          // Sort food names by how much magnesium is in that food

          let lenghtOfListOfNutrientFoods = orderedListOfNutrientFoods.length;
          let listOfFoodsAndAmounts = [];
          //Vars to use in for loop below

          for (let i = 0; i < lenghtOfListOfNutrientFoods; i++) {
            listOfFoodsAndAmounts = [
              ...listOfFoodsAndAmounts,
              `${orderedListOfNutrientFoods[i]} : ${orderedListOfNutrientAmounts[i]}${unit[i]}`,
            ];
          }
          // Create an arr with UI-friendly organization of magnesium data

          setIsLoaded(true);
          setnutrientData({
            unit: unit,
            nutrient: nutrient,
            listOfFoodsAndAmounts: listOfFoodsAndAmounts,
          });
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <p class="title is-1">Nutrient</p>
        <p>{nutrientData.nutrient}</p>

        <p class="title is-1">Amount per food</p>

        <table>
          <thead>
            <tr>
              <th>Food : Amount</th>
            </tr>
          </thead>
          <tbody>
            {nutrientData.listOfFoodsAndAmounts.map((elm, idx) => (
              <tr key={idx}>
                {/* "idx" is unique identifier of food, "elm" is food and its corresponding nutrient amount and unit of measurement */}
                <td>{elm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
