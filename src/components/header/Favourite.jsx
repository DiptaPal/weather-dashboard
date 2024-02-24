/* eslint-disable react/prop-types */
import favouriteIcon from "../../assets/heart.svg";
export default function Favourite({ onShow }) {
    return (
        <div
            onClick={onShow}
            className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
        >
            <img src={favouriteIcon} alt="" />
            <span>Favourite Locations</span>
        </div>
    );
}
