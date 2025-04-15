import React, { useState } from 'react';
import { Student } from './types/Student';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';
import './App.css';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (name: string) => {
    const newStudent: Student = {
      id: Date.now(),
      name,
      isPresent: false
    };
    setStudents(prev => [...prev, newStudent]);
  };

  const toggleAttendance = (id: number) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  return (
    <div className="App">
      <h1>📚 Student Attendance App</h1>
      <AddStudentForm onAdd={addStudent} />
      <StudentList students={students} onToggle={toggleAttendance} />
    </div>
  );
};

export default App;
