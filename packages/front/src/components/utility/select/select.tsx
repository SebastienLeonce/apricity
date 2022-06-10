interface Props {
    value: string;
    onChange: (value: string) => void;
    categories: string[];
}

const Select = ({ value, categories, onChange }: Props) => {
    return (
        <div className="flex space-x-4">
            <p className="underline">variable :</p>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {categories.map((category) => (
                    <option key={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};
export default Select;
