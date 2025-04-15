import './StudentItem.css';
import React from 'react';
import { Student } from '../types/Student';

interface Props {
  student: Student;
  onToggle: (id: number) => void;
}

const StudentItem: React.FC<Props> = ({ student, onToggle }) => {
  return (
    <li 
  onClick={() => onToggle(student.id)} 
  className={student.isPresent ? 'present' : 'absent'}
>
  {student.name} - {student.isPresent ? "✅ Present" : "❌ Absent"}
</li>

  );
};

export default StudentItem;
