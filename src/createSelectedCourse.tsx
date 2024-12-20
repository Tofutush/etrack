import Course from "./interfaces/Course";
import SelectedCourse from "./interfaces/SelectedCourse";

function createSelectedCourse(course: Course): SelectedCourse {
    return { ...course, letterGrade: 'A' };
}

export default createSelectedCourse