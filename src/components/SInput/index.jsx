export default function SInput({ type, name, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
