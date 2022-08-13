const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const authKey = "1";

export const getOneRandom = async () => {
  const response = await fetch(randomUrl, {
    method: "GET",
    Authorization: authKey,
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  // console.log("data is", data);
  return data.drinks[0];
};
export const getBases = async (base) => {
  // const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${base}`;
  const baseUrl = `https://www.thecocktaildb.com/images/ingredients/${base}-Medium.png`;

  // console.log(" baseurl", baseUrl);
  const data = await fetch(baseUrl, {
    method: "GET",
    Authorization: authKey,
  });
  // console.log("data is", data.url);
  return data.url;
};
export const getSelection = async (base) => {
  const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${base}`;
  console.log(" base", base);
  const data = await fetch(baseUrl, {
    method: "GET",
    Authorization: authKey,
    headers: { Accept: "application/json" },
  });
  const dataJson = await data.json();
  console.log(dataJson, "dataJson");

  // console.log(dataJson.drinks, "dataJson.drinks");
  return dataJson.drinks;
};
export const getById = async (id) => {
  const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const data = await fetch(baseUrl, {
    method: "GET",
    Authorization: authKey,
    headers: { Accept: "application/json" },
  });
  const dataJson = await data.json();
  // console.log(dataJson, "dataJson");
  return dataJson.drinks[0];
};
