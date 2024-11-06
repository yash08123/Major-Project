

const Hero = () => {


  return (
    <>
      <div
        className="hero bg-Blue min-h-screen"
        style={{ backgroundImage: 'url("../../public/LHero.png")' }}
      >
        <div className="w-full"></div>
        <div className="hero flex ml-32 flex-col lg:flex-row items-start lg:items-start lg:justify-start text-left">
       
          <div>
            <h1 className="text-5xl text-Black font-bold">
              New Lawyer App in making!
            </h1>
            <p className="py-6 text-Black">
              Making a mistake on your return can be constantly.
            </p>
            <button className="btn btn-primary">Free Case Evaluation</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
