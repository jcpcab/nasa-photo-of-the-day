import React from "react";
import NasaPhoto from "./components/NasaPhoto"
import "./App.css";
import styled from "styled-components";

const AllContent = styled.div`
  background: rgb(27, 37, 87);
  background: radial-gradient(circle, rgba(27, 37, 87, 1) 0%, rgba(60, 12, 22, 1) 100%);
  padding: 10%;
`

function App() {


    return (
        <AllContent>
            <div className="App">
                <h1>O Damn Space?</h1>
                <NasaPhoto/>
            </div>
        </AllContent>
    )
}

export default App;
