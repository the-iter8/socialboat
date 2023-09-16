import "./Main.css";
import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { filterDataByTags } from "../../utils/helpers";

export default function Main({ data, selectedTags }) {
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    const filteredData = filterDataByTags(data, selectedTags);
    setSelectedData(filteredData);
  }, [data, selectedTags]);

  return (
    <main className='main-container'>
      {selectedData.map((item, index) => (
        <Card key={index} heading={item.heading} tags={item.tags} text={item.text} video={item.video} />
      ))}
    </main>
  );
}
