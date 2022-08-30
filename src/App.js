import React, { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./ContactCard";

const App = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=6")
            .then((response) => response.json())
            .then((data) => {
                console.log(results);
                setResults(data.results);
            });
    }, []);

    return (
        <div>
            {results.map((result, index) => {
                return (
                    <ContactCard
                        key={index}
                        avatarUrl={result.picture.large}
                        name={result.name.first}
                        email={result.email}
                        number={result.phone}
                    />
                );
            })}
        </div>
    );
};

export default App;
