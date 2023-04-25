import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Audio, ThreeDots } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      const newData = _data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(newData);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="white" /></div>:
      data.map((e, i) => {
        return (
          <Link to={`/detail/${e.id}`}>
          <div
            key={i}
            className="card shadow-lg p-2  text-large font-medium hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
          >
            <img className="h-60 md:72" src={e.image} />
            <h1>
              <span className="text-gray-500"></span> {e.title}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-500 ">Rating</span>
              <ReactStars
                size={20}
                half={true}
                value={e.rating/e.rated}
                edit={false}
                className="ml-2"
              />
            </h1>
            <h1>
              <span className="text-gray-500">Year</span>: {e.year}
            </h1>
          </div></Link>
        );
      })}
    </div>
  );
};

export default Card;
