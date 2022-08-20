export const Portfolio = () => {
  const works = [1, 2];
  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">Past Work</h2>
      <div className="mt-10 flex flex-col items-center justify-between space-y-5 space-x-0 md:flex-row md:space-y-0 md:space-x-5">
        {works.map((item) => (
          <div className="max-w-[600px] text-dark" key={`past-work-${item}`}>
            <img
              className="rounded-3xl"
              src="https://via.placeholder.com/600x350"
              alt=""
            />
            <p className="mt-2 text-sm">Spring 2022</p>
            <h4 className="mt-2 text-2xl font-bold">
              Young Adult Preferences of the Vaction Rentals and Short Term
              Stays Industry
            </h4>
            <p className="mt-1 text-lg">A measurement model for Airbnb</p>
          </div>
        ))}
      </div>
    </section>
  );
};
