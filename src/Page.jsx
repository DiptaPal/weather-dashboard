import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./contexts";

import clearSkyImg from "./assets/backgrounds/clear-sky.jpg";
import fewCloudsImg from "./assets/backgrounds/few-clouds.jpg";
import mistImg from "./assets/backgrounds/mist.jpeg";
import rainyDayImg from "./assets/backgrounds/rainy-day.jpg";
import scatteredCloudsImg from "./assets/backgrounds/scattered-clouds.jpg";
import showerRainImg from "./assets/backgrounds/shower-rain.jpg";
import snowImg from "./assets/backgrounds/snow.jpg";
import thunderstormImg from "./assets/backgrounds/thunderstorm.jpg";
import winterImg from "./assets/backgrounds/winter.jpg";

export default function Page() {
    const { weatherData, loading } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");

    const getBackgroundImage = (weather) => {
        switch (weather) {
            case "Clear":
                return clearSkyImg;
            case "Clouds":
                return scatteredCloudsImg;
            case "Mist":
                return mistImg;
            case "Rain":
                return rainyDayImg;
            case "Drizzle":
                return showerRainImg;
            case "Fog":
                return winterImg;
            case "Haze":
                return fewCloudsImg;
            case "Snow":
                return snowImg;
            case "Thunder":
                return thunderstormImg;
            default:
                return clearSkyImg;
        }
    };

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        setClimateImage(bgImage);
    }, [weatherData.climate]);
    return (
        <>
            {loading.state ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-sky-500"></div>
                </div>
            ) : (
                <div
                    style={{
                        backgroundImage: `url(${climateImage})`,
                    }}
                    className="grid items-center justify-center h-screen bg-no-repeat bg-cover"
                >
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>
            )}
        </>
    );
}
