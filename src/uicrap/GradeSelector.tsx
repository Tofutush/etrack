// the box that lets you select your grade

type GradeSelectorProps = {
    onChange: (grade: Array<number>) => void;
}

function GradeSelector({ onChange }: GradeSelectorProps) {
    return (
        <div className="graybox grade-selector flex space-between">
            <div>年级</div>
            <select name="grade" defaultValue="1" onChange={e => onChange(e.target.value.split(',').map(n => parseInt(n)))}>
                <option value="1">高一</option>
                <option value="2">高二</option>
                <option value="3">高三</option>
                <option value="1,2">高一 & 高二</option>
                <option value="1,2,3">高一 & 高二 & 高三</option>
            </select>
        </div>
    )
}

export default GradeSelector;