import { useContext, useState, useEffect } from "react";
import redFavouriteIcon from "../../assets/heart-red.svg";
import favouriteIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../contexts";
export default function AddToFavourite() {
    const { favorites, addToFavorites, removeFromFavorites } =
        useContext(FavoriteContext);

    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;

    const [isFavourite, setIsFavourite] = useState(false);

    const handleFavourite = () => {
        const found = favorites.find((fav) => fav.location === location);

        if (!found) {
            addToFavorites(latitude, longitude, location);
        } else {
            removeFromFavorites(location);
        }
        setIsFavourite(!isFavourite);
    };

    useEffect(() => {
        const found = favorites.find((fav) => fav.location === location);
        setIsFavourite(!!found);
    }, []);

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    onClick={handleFavourite}
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                >
                    <span>Add to Favourite</span>
                    <img
                        src={isFavourite ? redFavouriteIcon : favouriteIcon}
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
}
