import React, { useEffect, useState } from "react";
import "./hero.css";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignCenter,
  faAngleDown,
  faAngleUp,
  faHome,
  faSearch,
} from "@fortawesome/fontawesome-free-solid";
import {} from "@fortawesome/free-brands-svg-icons";
import ResultsCategoryHouses from "./ResultsHouses";
import axios from "axios";
import salesButtons from "../../Datas/salesButtons";
import db from "../../Datas/db";

export default function HeroSection() {
  const [angle, setAngle] = useState(false);
  const [data, setData] = useState({});

  function changeAngle() {
    setTimeout(() => {
      setAngle((prev) => !prev);
    }, 200);
  }
  function falseAngle() {
    setAngle(false);
  }

  const url = `http://localhost:3000/properties`;
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3000/properties",
      headers: {
        "X-RapidAPI-Key": "ecb953bf57mshdada7679e3da912p12769bjsn88b4978cdfd8",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const sales = salesButtons.map((sale, i) => {
    return <span key={i}>{sale}</span>;
  });

  return (
    <>
      <div className="hero">
        <span className="h1">Find What You Are Looking For</span>
        {/* <p>{data.hits[0].id}</p> */}
        <div className="sales-rent">{sales}</div>
        <div className="search-property">
          <form action="#">
            <div className="border-right">
              <FontAwesomeIcon icon={faSearch} className="opacity" />
              <input type="search" placeholder="Type keyword" />
            </div>
            <div className="angle-up-down border-right">
              <div onClick={changeAngle} className="angle-click">
                <div>
                  <FontAwesomeIcon icon={faHome} className="opacity" />
                  <span className="opacity">Typology</span>
                </div>
                <FontAwesomeIcon icon={angle ? faAngleUp : faAngleDown} />
              </div>
              {angle && <ResultsCategoryHouses click={falseAngle} />}
            </div>

            <div className="border-right">
              <input type="search" placeholder="Area" />
            </div>
            <div className="align-center">
              <FontAwesomeIcon icon={faAlignCenter} />
            </div>
            <button>Search</button>
          </form>
        </div>
      </div>
    </>
  );
}
