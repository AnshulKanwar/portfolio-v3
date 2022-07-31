const Container = ({ name, fg, bg, children }) => {
  return (
    <div
      id={name.toLowerCase()}
      className={`${
        bg || "bg-zinc-200"
      } ${fg} px-10 py-14 mx-20 my-5 rounded-3xl`}
    >
      <h1 className="text-center font-black text-5xl mb-8">{name}</h1>
      {children}
    </div>
  );
};

export default Container;
