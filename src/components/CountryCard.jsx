const CountryCard = ({ name, flag, region, population, capital }) => {
  return (
    <div className="country-card">
      <img src={flag} alt={`${name}flag`} className="country-flag"></img>

      
      <h2>{name}</h2>
      <p>
        <strong>Capital :</strong>
        {capital}
      </p>
      <p>
        <strong>Region :</strong>
        {region}
      </p>
      <p>
        <strong>Population : </strong>
        {population}
      </p>
    </div>
  );
};

export default CountryCard