import { useState } from 'react';
import './App.css';
import Gpa from './Gpa';
import GradeSelector from './GradeSelector';
import CourseSelection from './CourseSelection';
import AddCourseSection from './AddCourseSection';
import CoursesSection from './CoursesSection';
import courseData from './data.json';

function App() {
    const [grade, setGrade] = useState<number>(1);
    const [gpa, setGpa] = useState<number>(0);
    function onGradeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setGrade(parseInt(event.target.value));
        setGpa(parseInt(event.target.value));
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
                    <CourseSelection />
                </div>
                <div className="right-side">
                    <AddCourseSection />
                    <CoursesSection courseList={courseData} />
                </div>
            </div>
        </>
    )
}

export default App;
