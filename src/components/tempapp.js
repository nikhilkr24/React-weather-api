import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Ranchi");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1e4a14eeb40ec406ab73a5c7673f1e8e`;
            const respons = await fetch(url);
            const resJson = await respons.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className="inputFeild" onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                </div>

                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <div>
                        {/* <div id="weathercon">
                           {city.main}
                        </div> */}
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i> {search}
                            </h2>
                            <h1 className="temp">
                               {Math.round(city.temp)} <span>&deg;C</span>
                                
                            </h1>
                            <h3 className="tempmin_max">
                                Min : {city.temp_min} | Max : {city.temp_max}
                            </h3>
                        </div>

                        <div className="wave-one"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>
                    </div>
                )}

            </div>

        </>
    );
}
export default Tempapp;