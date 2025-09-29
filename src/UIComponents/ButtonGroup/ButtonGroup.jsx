
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