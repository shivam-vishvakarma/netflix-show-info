import React from "react";
import Herosection from "../components/Herosection";

export const metadata = {
  title: "About | Flixes",
  description: "We provide the best streaming service in the world.",
};

const page = () => {
  return (
    <>
      <Herosection
        title={"Our Story"}
        para={
          "At Flixes Shows and Movies, we're passionate about bringing the best of entertainment to your screens. Our dedicated team works tirelessly to curate an extensive database of shows and movies, ensuring you have access to top-quality content at your fingertips. Whether you're a seasoned binge-watcher or a casual viewer, we strive to enhance your streaming experience and keep you hooked for hours on end."
        }
        imgUrl={"/about.svg"}
      />
    </>
  );
};

export default page;
