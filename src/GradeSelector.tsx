type GradeSelectorProps = {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function GradeSelector({ onChange }: GradeSelectorProps) {
    return (
        <div className="graybox">
            <div>年级</div>
            <select name="grade" defaultValue="高一" onChange={onChange}>
                <option value="1">高一</option>
                <option value="2">高二</option>
                <option value="3">高三</option>
            </select>
        </div>
    )
}

export default GradeSelector;