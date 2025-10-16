function ContactItem({ icon, label, link, key, linkDisplay})  {
  return (	
    <li key ={key}>
      <strong>{icon}{label}:</strong>{" "}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {linkDisplay ? linkDisplay : link}
      </a>
    </li>
  );
}

export default ContactItem