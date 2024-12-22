import Course from './Course';
import letterGrade from './letterGrade';

interface SelectedCourse extends Course {
    letterGrade: letterGrade;
}

export default SelectedCourse;
