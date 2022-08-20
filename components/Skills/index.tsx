export const Skills = () => {
  const skills = [1, 2, 3, 4, 5, 6];
  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold uppercase text-primary">Skills</h2>
      <div className="noscrollbar mt-10 flex space-x-8 overflow-x-scroll pb-2">
        {skills.map((skill) => (
          <div
            className="flex h-[150px] w-[250px] flex-none items-center justify-center rounded-3xl bg-neutral-300"
            key={`skill-${skill}`}
          >
            <p className="inline">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
