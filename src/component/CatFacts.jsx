import React, { useEffect, useState, useRef } from "react";
import { Tabulator } from "tabulator-tables";
import "./CatFacts.css";

const CatFacts = () => {
  const tableRef = useRef(null);

  // Fetching data from API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const allFacts = [];

      // Fetch data from all pages (maximum 5 pages)
      for (let page = 1; page <= 5; page++) {
        const response = await fetch(
          `https://catfact.ninja/breeds?page=${page}`
        );
        const data = await response.json();
        // console.log(data.data); //show All data

        // Stop fetching if there's no more data
        if (data.data.length === 0) {
          break;
        }

        allFacts.push(...data.data);
      }

      // Group cat breeds by country
      const groupedByCountry = groupByCountry(allFacts);
      console.log("groupedByCountry", groupedByCountry);

      // Display data in the nested data tree
      createNestedDataTree(groupedByCountry);
    } catch (error) {
      console.error("Error fetching cat facts:", error);
    }
  };

  const groupByCountry = (facts) => {
    const groupedData = {};

    facts.forEach((fact) => {
      console.log(fact);
      const country = fact.country.toUpperCase();
      console.log(">>>>>>>>>>>>>", country);
      if (!groupedData[country]) {
        groupedData[country] = [];
      }
      groupedData[country].push(fact);
    });

    return groupedData;
  };

  const createNestedDataTree = (groupedData) => {
    // console.log("<<<<<<<<<>>>>><<//.", groupedData);
    if (!tableRef.current) {
      return;
    }

    const table = new Tabulator(tableRef.current, {
      data: Object.entries(groupedData).map(([country, breeds]) => ({
        country,
        breeds: breeds.map((breed) => breed.breed).join(" , "),
      })),
      layout: "fitColumns",
      dataTree: true,
      dataTreeStartExpanded: false,
      columns: [
        { title: "Country", field: "country", headerFilter: "input" },
        { title: "Breeds", field: "breeds", headerFilter: "input" },
      ],
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="center">Data Fetch Inside Table Components</h1>
          <div ref={tableRef}>
            <h2 className="center">Loading........</h2>
          </div>
          ;
        </div>
      </div>
    </>
  );
};

export default CatFacts;
