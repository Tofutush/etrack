import SelectedCourse from "../interfaces/SelectedCourse";

// one strip of a course

type SelectedCourseCardProps = {
	course: SelectedCourse,
	onDelete: (course: SelectedCourse) => void;
}

function SelectedCourseCard({ course, onDelete }: SelectedCourseCardProps) {
	return (
		<div className="chosen-course flex space-between align-center">
			<div className="flex align-center">
				<button className="graybutton" onClick={() => onDelete(course)}>x</button>
				<div>{course.name}</div>
			</div>
			<select className="graybutton" defaultValue={course.letterGrade}>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
		</div>
	)
}

export default SelectedCourseCard;