export default function ProfileSettingsFirebaseInput(props) {
  return (
    <label>
      <input
        required
        type="text"
        onChange={(e) => props.setValue(e.target.value)}
        placeholder={props.valueInput}
      />
    </label>
  );
}
