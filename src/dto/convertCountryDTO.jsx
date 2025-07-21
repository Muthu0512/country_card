const convertCountryDTO = (countries) => {
  return countries.map((country) => {
    return {
      name: country.name.common ?? "",
      flag: country.flags.png ?? "",
      region: country.region ?? "",
      population: country.population ?? "",
      capital: country.capital?.[0] ?? "NA",
    };
  });
};

export default convertCountryDTO