import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const length = 16;

  function randomColorUtility() {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
    console.log(rgbColor);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", marginTop: "6rem", color: "white", flexDirection: "column" }}>
        <h1>{typeOfColor === "hex" ? "HEX" : "RGB"}</h1>
        <br />
        <h1 style={{ marginTop: "30px" }}>{color}</h1>
      </div>
    </div>
  );
}
