
export  function ButtonGroup({buttons}) {
  return (
    <div className="flex gap-4">
      {buttons.map((btn) => (
        <Button
          key={btn.name}
          text={btn.name}
          link={btn.link}
          targetId={btn.targetId}
        />
      ))}
    </div>
  );
}



export function Button({ text, link, targetId }) {
  const handleClick = () => {
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (link) {
    return (
      <a href={link}>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
          <p className="roboto dark:text-white text-black text-2xl">{text}</p>
        </button>
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
    >
      <p className="roboto dark:text-white text-black text-2xl">{text}</p>
    </button>
  );
}