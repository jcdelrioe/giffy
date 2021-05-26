import React, { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";

export default function SearchResults({ params }) {
	const { keyword, rating = "g" } = params;

	const { loading, gifs, setPage } = useGifs({ keyword, rating });

	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	});

	const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";

	const debounceHanleNextPage = useCallback(
		debounce(() => setPage((prevPage) => prevPage + 1), 200),
		[setPage]
	);

	useEffect(
		function () {
			if (isNearScreen) debounceHanleNextPage();
		},
		[debounceHanleNextPage, isNearScreen]
	);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<Helmet>
						<title>{title}</title>
						<meta name="description" content={title} />
					</Helmet>
					<SearchForm initialKeyword={keyword} initialRating={rating} />
					<h3 className="App-title">{decodeURI(keyword)}</h3>
					<ListOfGifs gifs={gifs} />
					<div id="visor" ref={externalRef}></div>
				</>
			)}
		</>
	);
}
