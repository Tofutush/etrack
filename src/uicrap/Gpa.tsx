// the gpa box

type GpaProps = {
    value: number
}

function Gpa({ value }: GpaProps) {
    let gpaStr: string = value.toString();
    return (
        <div className="graybox">
            <div>加权绩点</div>
            <div>{gpaStr}</div>
        </div>
    )
}

export default Gpa;