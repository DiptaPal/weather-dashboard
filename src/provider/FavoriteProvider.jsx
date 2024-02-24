/* eslint-disable react/prop-types */
import { FavoriteContext } from "../contexts";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    const addToFavorites = (latitude, longitude, location) => {
        setFavorites((prev) => [...prev, { latitude, longitude, location }]);
    };

    const removeFromFavorites = (location) => {
        const restFavorites = favorites.filter(
            (favorite) => favorite.location !== location
        );
        setFavorites(restFavorites);
    };

    return (
        <FavoriteContext.Provider
            value={{ favorites, addToFavorites, removeFromFavorites }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;
