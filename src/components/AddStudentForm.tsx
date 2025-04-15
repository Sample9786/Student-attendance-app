import React, { useState } from 'react';
import './AddStudentForm.css';

interface Props {
  onAdd: (name: string) => void;
}

const AddStudentForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim());
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input 
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)} 
        placeholder="Student name"
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
