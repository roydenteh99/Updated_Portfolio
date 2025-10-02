export default function BasicSelect({ items, selectlabel = "Label", value, onValueChange }) {
  return (
    <div className="flex flex-col gap-0 w-full text-center">
      <label className="text-gray-700 font-medium text-xs m-0 p-0 border border-purple-300">{selectlabel}</label>
      <select
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {items.map((item, index) => (
          <option key={index} value={item} className="text-center">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}