import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

function App() {
  const [isShowLoading, setIsShowLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [isShowSub, setIsShowSub] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const LoadData = await fetch("https://seriescharacters.com/api/howimetyourmother");
      const json = await LoadData.json();
      setIsShowLoading(false);
      setCharacters(json);
      console.log(json);
    }
    fetchData();
    setTimeout(() => {
      setIsShowSub(true);
    }, 10000);
  }, []);

  return (
    <div>
      <h1>Series Api</h1>
      {isShowLoading && <LoadingMask />}
      <Character characters={characters} />
      { isShowSub && <Subscription/>}
    </div>
  );
}

export default App;
