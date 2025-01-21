import { useState } from 'react';
import CourseList from './courselist/CourseList';
import createSelectedCourse from './createSelectedCourse';
import requiredCourseData from './data/required.json';
import courseData from './data/selective.json';
import Course from './interfaces/Course';
import letterGrade from './interfaces/letterGrade';
import SelectedCourse from './interfaces/SelectedCourse';
import CourseSelection from './selectedcourselist/CourseSelection';
import Gpa from './uicrap/Gpa';
import GradeSelector from './uicrap/GradeSelector';
import Footer from './uicrap/Footer';

function App() {
    // const [grade, setGrade] = useState<Array<number>>([1]);
    // const [gpa, setGpa] = useState<number>(0);
    let gpa: number = 0;
    const [courseList, setCourseList] = useState<Array<Course>>(courseData.filter(c => c.grades.includes(1)));
    const [selectedCourses, setSelectedCourses] = useState<Array<SelectedCourse>>([]);
    const [requiredCourses, setRequiredCourses] = useState<Array<SelectedCourse>>(requiredCourseData.filter(c => c.grades.includes(1)).map(c => createSelectedCourse(c)));

    function onGradeChange(grade: Array<number>) {
        // let grade = event.target.value.split('').map(n => parseInt(n));
        // setGrade(grade);
        setSelectedCourses(selectedCourses.filter(c => c.grades.some(g => grade.includes(g))));
        setCourseList(courseData.filter(c => c.grades.some(g => grade.includes(g) && selectedCourses.every(sc => sc.name !== c.name))));
        setRequiredCourses(requiredCourseData.filter(c => c.grades.some(g => grade.includes(g))).map(c => createSelectedCourse(c)));
    }

    function onAddCourse(course: SelectedCourse) {
        // when we add a course from the list to selected, we append it to selectedcourses and remove it from the course list
        if (!selectedCourses.some(c => c.name === course.name)) {
            setSelectedCourses([...selectedCourses, course]);
            setCourseList(deleteCourseFromCourseList(course));
        }
    }

    function onLetterGradeChangeOptional(course: SelectedCourse, letterGrade: letterGrade) {
        setSelectedCourses(prev => {
            return prev.map(c => (c.name === course.name) ? { ...c, letterGrade: letterGrade } : c);
        })
    }

    function onLetterGradeChangeRequired(course: SelectedCourse, letterGrade: letterGrade) {
        setRequiredCourses(prev => {
            return prev.map(c => (c.name === course.name) ? { ...c, letterGrade: letterGrade } : c);
        })
    }

    function deleteCourseFromCourseList(course: SelectedCourse) {
        // delete a specific course from the list, matched by name
        return courseList.filter(c => c.name !== course.name);
    }

    function deleteCourseFromSelectedCourseList(course: SelectedCourse) {
        // delete a specific course from the *selected* list, matched by name
        return selectedCourses.filter(c => c.name !== course.name);
    }

    function removeSelectedCourse(course: SelectedCourse) {
        // this breaks the order of the course list, but order does not matter anyways
        setSelectedCourses(deleteCourseFromSelectedCourseList(course));
        setCourseList([...courseList, course]);
    }

    function calculateGpa() {
        const gradePoints: { [key: string]: number } = { 'A': 100, 'B': 10, 'C': 1, 'D': 0, 'F': -1 };
        const allCourses = [...selectedCourses, ...requiredCourses];
        const totalPoints = allCourses.reduce((acc, course) => acc + (gradePoints[course.letterGrade] || 0), 0);
        return totalPoints / allCourses.length;
    }
    gpa = parseFloat(calculateGpa().toFixed(2));

    return (
        <>
            <header>
                <h1>ETrack GPA</h1>
                <p>欢迎使用 ETrack GPA 预估计算器</p>
            </header>
            <div id="flexbox">
                <div className="col-stuff">
                    <Gpa value={gpa} />
                    <GradeSelector onChange={onGradeChange} />
                    <CourseSelection courses={selectedCourses} required={requiredCourses} onDelete={removeSelectedCourse} onChangeOptional={onLetterGradeChangeOptional} onChangeRequired={onLetterGradeChangeRequired} />
                </div>
                <div id="right" className="col-stuff">
                    <h3>添加课程</h3>
                    <CourseList list={courseList} onAdd={onAddCourse} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;
