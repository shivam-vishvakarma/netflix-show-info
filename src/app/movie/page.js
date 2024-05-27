import React from "react";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

export const metadata = {
  title: "Movies | Flixes",
  description: "Watch the latest movies and series.",
};

const Movie = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.RAPIDAPI_URL;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  //   console.log(main_data.jawSummary);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h2>Series & Movie</h2>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
