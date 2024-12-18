// the gpa box

type GpaProps = {
    value: number
}

function Gpa({ value }: GpaProps) {
    let gpaStr: string = value.toString();
    return (
        <div className="graybox">
            <div>加权绩点</div>
            <h1>{gpaStr}</h1>
        </div>
    )
}

export default Gpa;