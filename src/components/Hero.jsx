const Hero = () => {
  return (
    <>
      <div className="hero bg-Blue min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl text-Black font-bold">New Lawyer App in making!</h1>
            <p className="py-6 text-Black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut nulla dolorem recusandae minus. Quibusdam, minus? Recusandae, quas unde reiciendis eveniet dolores, ipsa optio eaque eius, eligendi libero error ut excepturi soluta delectus.
            </p>
            <button className="btn  btn-primary">I&apos;m Interested</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
