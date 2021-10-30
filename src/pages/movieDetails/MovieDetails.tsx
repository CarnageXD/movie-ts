import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getMoviesDataAPI } from "../../api";
import { AcceptedButton } from "../../components/common/buttons/AcceptedButton";
import { ActionButton } from "../../components/common/buttons/ActionButton";
import { Preloader } from "../../components/common/preloader/Preloader";
import {
  MoviesDetailsApiResponse,
  InfoMoviesType,
  InfoMovieTrailer,
} from "../../types/movieTypes";
import clock from "./../../assets/icons/clock.png";
import preposter from "./../../assets/preposter/preposter.png";

export const MovieDetails: React.FC = () => {
  const [movieDetails, setMovieDetails] =
    useState<MoviesDetailsApiResponse | null>(null);
  const [trailers, setTrailers] = useState<InfoMovieTrailer>({});
  const [similarMovies, setSimilarMovies] = useState<InfoMoviesType[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isTrailerOpened, setIsTrailerOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isImg, setIsImg] = useState(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setMovieDetails(await getMoviesDataAPI.getMovieDetails(id));
      setTrailers(await getMoviesDataAPI.getMovieTrailer(id));
      setSimilarMovies(await getMoviesDataAPI.getSimilarMovies(id));

      setIsLoading(false);
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    const localSavedMovies = localStorage.getItem("saved");
    const savedMovies: MoviesDetailsApiResponse[] = localSavedMovies
      ? JSON.parse(localSavedMovies)
      : [];
    const isLocallySaved = savedMovies.some(
      (movie) => movie.id === movieDetails?.id
    );
    setIsSaved(isLocallySaved);
  }, [movieDetails]);

  const saveToLocalStorage = () => {
    const localeSavedMovies = localStorage.getItem("saved");
    const savedMovies = localeSavedMovies ? JSON.parse(localeSavedMovies) : [];
    savedMovies.push(movieDetails);
    localStorage.setItem("saved", JSON.stringify(savedMovies));
    setIsSaved(true);
  };

  if (similarMovies.length > 10) similarMovies.length = 10;

  return (
    <div className="text-gray leading-loose">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-2 mr-0 lg:mr-10 flex flex-col items-center">
            <div className="relative">
              {movieDetails?.vote_average ? (
                <div className="flex items-center justify-center absolute w-9 h-9 bg-yellow-400 rounded-full index-10 top-3 right-3 text-black font-semibold">
                  {movieDetails?.vote_average - 1}
                </div>
              ) : null}
              <img
                onLoad={() => setIsImg(true)}
                className="h-imgList w-imgList"
                src={
                  movieDetails?.poster_path
                    ? isImg
                      ? `https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`
                      : preposter
                    : preposter
                }
                alt="poster"
              />
            </div>
            <div onClick={() => setIsTrailerOpened(true)}>
              <ActionButton text="Watch trailer" />
            </div>
          </div>

          <div className="flex flex-col flex-1 relative items-center lg:items-start">
            {isSaved ? (
              <div className="relative lg:absolute top-0 right-0">
                <AcceptedButton text="Added" />
              </div>
            ) : (
              <div
                onClick={() => saveToLocalStorage()}
                className="relative lg:absolute top-0 right-0"
              >
                <ActionButton text="Add to watch later" />
              </div>
            )}

            {/* Description */}
            <div className="flex justify-between">
              <div className="flex items-center">
                <img height={16} width={16} src={clock} alt="" />
                <span className="ml-1">{movieDetails?.runtime} minutes</span>
              </div>
            </div>
            <div className="mt-6 mb-6 flex flex-col items-center lg:items-start">
              <span>{movieDetails?.release_date?.slice(0, 4)}</span>
              <h2 className="text-5xl text-white">
                {movieDetails?.original_title}
              </h2>
              <p className="italic text-center">{movieDetails?.tagline}</p>
            </div>
            <ul className="flex flex-wrap justify-center md:justify-start mb-4 text-xl md:text-2xl list-disc lg:ml-5 ml-12">
              {movieDetails?.genres?.map((genre, index) => (
                <li key={index} className="mr-10">
                  {genre.name}
                </li>
              ))}
            </ul>
            <div className="mb-4 text-xl leading-loose">
              <div>Status: {movieDetails?.status}</div>
            </div>
            <div className="p-3 bg-gray-light">{movieDetails?.overview}</div>

            {/* Similar movies */}
            <div>
              {similarMovies.length > 0 ? (
                <>
                  <h2 className="text-3xl mt-8">
                    Similar to {movieDetails?.original_title}:{" "}
                  </h2>
                  <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between mt-4">
                    {similarMovies.map((movie) => {
                      return (
                        <div
                          key={movie.id}
                          className="flex flex-col items-center mb-4"
                        >
                          <div>
                            <NavLink to={`./${movie.id}`}>
                              <img
                                className="h-64 w-48"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt="poster"
                              />
                            </NavLink>
                          </div>
                          <h2 className="w-48 text-xl text-white p-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
                            {movie.original_title}
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
      {isTrailerOpened ? (
        <div
          onClick={() => setIsTrailerOpened(false)}
          className="fixed inset-1/2 transform -translate-y-1/2 transform -translate-x-1/2 w-full h-full flex justify-center items-center bg-gray-lightest bg-opacity-95"
        >
          <iframe
            className="w-9/12 h-3/5"
            src={`https://www.youtube.com/embed/${trailers.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
    </div>
  );
};
