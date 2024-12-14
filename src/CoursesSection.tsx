import Course from './Course';
import CourseProps from './CourseProps';

type CoursesSectionProps = {
    courseList: Array<CourseProps>;
}

function CoursesSection({ courseList }: CoursesSectionProps) {
    let courses = courseList.map(course => <Course key={course.name} name={course.name} grade={course.grade} />);
    return (
        <div id="courses-section">
            {courses}
        </div>
    )
}

export default CoursesSection;