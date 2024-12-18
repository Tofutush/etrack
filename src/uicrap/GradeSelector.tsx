// the box that lets you select your grade

type GradeSelectorProps = {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function GradeSelector({ onChange }: GradeSelectorProps) {
    return (
        <div className="graybox grade-selector">
            <div>年级</div>
            <select name="grade" defaultValue="1" onChange={onChange}>
                <option value="1">高一</option>
                <option value="2">高二</option>
                <option value="3">高三</option>
            </select>
        </div>
    )
}

export default GradeSelector;