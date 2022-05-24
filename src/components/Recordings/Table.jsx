import React,{useState,useEffect} from "react";
import "./Table.css";

const Table = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
 useEffect(() => {
    fetch("http://localhost:5001/devnation-asia-app/asia-southeast1/user/recordings/getAll/Np92AJy9c53bMjcrUMmm")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="table-wrapper">
      <table className="table" cellSpacing="0">
        <tr className="th">
          <th>VIDEO TITLE</th>
          <th>INSTRUCTOR</th>
          <th>DATE</th>
          <th></th>
        </tr>
        {items.map((item) => {
          return(
          <tr>
            <td><a href={item.videoUid} className="v-title">{item.videoTitle}</a></td>
            <td>{item.instructorName}</td>
            <td>{item.date}</td>
            <td className="w-link"><a href={item.videoUid} className="v-title">Watch Recording</a></td>
          </tr>
          )
        })}
      </table>
    </div>
    );
  }

  
  
};

export default Table;
