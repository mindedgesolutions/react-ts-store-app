const About = () => {
  document.title = `About | ${import.meta.env.VITE_APP_TITLE}`;

  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-2 items-center justify-center text-3xl font-bold leading-none tracking-wide sm:text-6xl">
        We love{" "}
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          Comfy
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum
        molestiae exercitationem hic debitis sed nulla architecto consectetur!
        Ab amet debitis sapiente fugiat totam fuga quia quaerat, quos quod
        assumenda!
      </p>
    </section>
  );
};
export default About;
