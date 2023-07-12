import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormLocation from "./components/FormLocation";
import { useEffect, useState } from "react";
import axios from "axios";
import Rick from "./assets/img/Rick.png"
import "./App.css";

function App() {
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [idLocation]);

  return (
    <div>
      <img className="banner__img" src={Rick} />
      <FormLocation setIdLocation={setIdLocation} />
      {isLoading ? (
        <h2 className="advertiment__message">🕗 Loading ...</h2>
      ) : hasError ? (
        <h1 >❌ HEY! you must provide and id from 1 to 126 😒</h1>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident-container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
