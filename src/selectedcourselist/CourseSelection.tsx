import letterGrade from '../interfaces/letterGrade';
import SelectedCourse from '../interfaces/SelectedCourse';
import OptionalCourseCard from './OptionalCourseCard';
import RequiredCourseCard from './RequiredCourseCard';

// the thing off to the left showing a list of the courses youve selected

type CourseSelectionProps = {
    courses: Array<SelectedCourse>,
    required: Array<SelectedCourse>,
    onDelete: (course: SelectedCourse) => void,
    onChangeOptional: (course: SelectedCourse, letterGrade: letterGrade) => void,
    onChangeRequired: (course: SelectedCourse, letterGrade: letterGrade) => void
}

function CourseSelection({ courses, required, onDelete, onChangeOptional, onChangeRequired }: CourseSelectionProps) {
    let requiredCourses = required.map(c => <RequiredCourseCard key={c.name} course={c} onChange={onChangeRequired} />);
    let selectedCourses = courses.map(c => <OptionalCourseCard key={c.name} course={c} onDelete={onDelete} onChange={onChangeOptional} />);
    return (
        <div className="col-stuff graybox">
            <div>你的选择</div>
            <div className="subtitle">必修</div>
            <div className="col-stuff">
                {requiredCourses}
            </div>
            <div className="subtitle">选修</div>
            <div className="col-stuff">
                {selectedCourses}
            </div>
        </div>
    )
}

export default CourseSelection;