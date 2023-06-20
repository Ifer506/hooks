import React, { useEffect, useState } from "react";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(
    () => [
      fetch("http://localhost:3000/notes")
        .then((res) => res.json)
        .then((data) => setNotes(data)),
    ],
    []
  );
  return notes;
};

export default function Notes() {
  const notes = useNotes();
  return (
    <div>
      {notes.map((note) => (
        <li key={notes.id}>{notes.desc}</li>
      ))}
    </div>
  );
}
