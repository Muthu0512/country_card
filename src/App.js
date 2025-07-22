import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./components/CountryCard";
import convertCountryDTO from "./dto/convertCountryDTO";
import Pagination from "./components/Pagination"
import "./App.css" 





function App() {
  const [countries, setCountries] = useState([]);

  const [currPage,setCurrpage]=useState(1)

  const itemsPerPage=10
  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all").then((res)=>res.json())       <ES -5 method>
   
    // .then((res)=>console.log(res) )

    // .catch((err)=>console.log("something went wrong",err))

    // (async () => {
    //   const response = await fetch("https://restcountries.com/v3.1/all");
    //   const resData = await response.json();

    //   console.log(resData);              using fetch   .json() used to convert the readable format file
    // })();

    //  by using axios  .json () not necessary bcz, axios provide the readable file

    (async () => {
      const response = await axios("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population");

      console.log("Raw response",response)

      const rawdata = response.data;
      const countriesData = convertCountryDTO(rawdata);

      countriesData.sort((a,b)=> a.name.localeCompare(b.name))

      setCountries(countriesData);

      console.log(countriesData);
    })();
  }, []);
  const lastIdx=currPage*itemsPerPage
  const firstIdx=lastIdx-itemsPerPage

  const paginatedCountries=countries.slice(firstIdx,lastIdx)

  const paginate=(pageNum)=>{setCurrpage(pageNum) }

  const totalPage=Math.ceil(countries.length/itemsPerPage)
  return (
    <div className="App">
      <h1>Country Card</h1>
     
     <div className="country-grid">
     {paginatedCountries.map((country, index) => {
        const { name, flag, capital, region, population } = country;
        return <CountryCard
          key={index}
          name={name}
          flag={flag}
          capital={capital}
          region={region}
          population={population}>
            
          </CountryCard>;

      })}
     </div>

      
      <Pagination totalPage={totalPage} currPage={currPage} paginate={paginate}></Pagination>
    </div>
  );
}

export default App;
