import ContactItem from "./ContactItem"


export default function ContactList({ items }) {
  return (
    <ul>
      {items.map((contact) => (
        <ContactItem
          key={contact.label}
          icon={contact.icon}
          label={contact.label}
		  linkDisplay={contact.linkDisplay}
          link={contact.link}
        />
      ))}
    </ul>
  );
}