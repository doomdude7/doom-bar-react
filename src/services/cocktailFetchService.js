const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const authKey = "1";
export const getOneRandom = async () => {
  const response = await fetch(randomUrl, {
    method: "GET",
    Authorization: authKey,
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  console.log("data is", data);
  return data.drinks[0];
};
