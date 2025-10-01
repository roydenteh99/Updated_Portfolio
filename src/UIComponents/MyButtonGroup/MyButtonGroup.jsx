
export function MyButtonGroup({buttons,direction ="row"}) {
  return (
    <div
      className={`flex gap-4 justify-evenly flex-wrap flex-col ${
        direction === "row" ? "md:flex-row" : "md:flex-col"
      }`}
    >
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
        <button >
          <p >{text}</p>
        </button>
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
    >
      <p >{text}</p>
    </button>
  );
}