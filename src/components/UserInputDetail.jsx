export default function UserInputDetail({ label, inputIdentifier, onChange, ...props }) {
    return (
        <p>
            <label>{label}</label>
            <input type="number" required {...props} onChange={(e) => onChange(inputIdentifier, e.target.value)} />
        </p>
    )
}