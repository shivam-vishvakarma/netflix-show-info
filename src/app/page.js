import Herosection from "./components/Herosection";

const page = () => {
  return (
    <div>
      <Herosection
        title={"Lets watch movie together"}
        para={
          "Welcome to our Netflix Shows and Movies website, your one-stop destination for discovering the latest and greatest titles available on Netflix. Explore a vast collection of shows and movies, from gripping dramas to laugh-out-loud comedies, and create your personalized watchlist. With our intuitive interface, finding your next binge-worthy series or blockbuster film has never been easier."
        }
        imgUrl={"/home.svg"}
      />
    </div>
  );
};

export default page;
