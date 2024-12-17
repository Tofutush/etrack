import { useState } from 'react';
import CourseList from './courselist/CourseList';
import courseData from './data.json';
import Course from './interfaces/Course';
import SelectedCourse from './interfaces/SelectedCourse';
import CourseSelection from './selectedcourselist/CourseSelection';
import AddCourseSection from './uicrap/AddCourseSection';
import Gpa from './uicrap/Gpa';
import GradeSelector from './uicrap/GradeSelector';

function App() {
    const [grade, setGrade] = useState<number>(1);
    const [gpa, setGpa] = useState<number>(0);
    const [courseList, setCourseList] = useState<Array<Course>>(courseData.filter(c => c.grades.includes(1)));
    const [selectedCourses, setSelectedCourses] = useState<Array<SelectedCourse>>([]);
    
    function onGradeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setGrade(parseInt(event.target.value));
        setGpa(parseInt(event.target.value));
        setCourseList(courseData.filter(c => c.grades.includes(parseInt(event.target.value))));
        setSelectedCourses([]);
    }
    
    function onAddCourse(course: SelectedCourse) {
        if(!selectedCourses.some(c => c.name === course.name)) {
            setSelectedCourses([...selectedCourses, course]);
            setCourseList(deleteCourseFromCourseList(course));
        }
    }

    function deleteCourseFromCourseList(course: SelectedCourse) {
        return courseList.filter(c => c.name !== course.name);
    }
    
    return (
        <>
            <div id="title">
                <h1>ETrack GPA</h1>
                <p>欢迎使用 ETrack GPA 预估计算器</p>
            </div>
            <div className="flexbox">
                <div className="left-side">
                    <Gpa value={gpa} />
                    <GradeSelector onChange={onGradeChange} />
                    <CourseSelection courses={selectedCourses} />
                </div>
                <div className="right-side">
                    <AddCourseSection />
                    <CourseList list={courseList} onAdd={onAddCourse} />
                </div>
            </div>
        </>
    )
}

export default App;
