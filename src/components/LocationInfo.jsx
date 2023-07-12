import "./styles/Locationinfo.css"

const LocationInfo = ({ location }) => {
  return (
    <article className="location__card">
      <h2 className="location__card-info">{location?.name}</h2>
      <ul className="location__list">
        <li> 
          <span>Type: </span>
          <span>{location?.type}</span>
        </li> 
        <li>
          <span>Dimension: </span>
          <span>{location?.dimension} </span>
        </li>
        <li>
          <span>Population: </span>
          <span>{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
