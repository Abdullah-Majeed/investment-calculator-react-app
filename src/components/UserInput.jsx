import UserInputDetail from "./UserInputDetail";

export default function UserInput({ userInput, onChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <UserInputDetail label="Initial Investment" value={userInput.initialInvestment} inputIdentifier="initialInvestment" onChange={onChange} />
                <UserInputDetail label="Annual Investment" value={userInput.annualInvestment} inputIdentifier="annualInvestment" onChange={onChange} />
            </div>
            <div className="input-group">
                <UserInputDetail label="Excpected Return" value={userInput.expectedReturn} inputIdentifier="expectedReturn" onChange={onChange} />
                <UserInputDetail label="Duration" value={userInput.duration} inputIdentifier="duration" onChange={onChange} />
            </div>
        </section>
    )
}