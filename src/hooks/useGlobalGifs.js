import { useContext } from "react";
import GifsContext from "../context/GifsContext";

export default function useGoblalGifs() {
	return useContext(GifsContext).gifs;
}
