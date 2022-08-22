export const Contact = () => {
  const email = "carlyf@gmail.com";
  const pdf = "carly_fisher_resume.pdf";
  const link = "/#";
  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">
        Get in Touch
      </h2>
      <div className="my-10 text-lg">
        <div>
          <p>{email}</p>
        </div>
        <div>
          <p>{pdf}</p>
        </div>
        <div>
          <a href={link}>Let's Connect</a>
        </div>
      </div>
    </section>
  );
};
