import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { id: 1, title: 'My note 1' },
        { id: 2, title: 'My note 2' },
        { id: 3, title: 'My note 3' },
      ],
    };
  }

  static renderNotes = (notes) => (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );

  render() {
    const { notes } = this.state;

    const selectedNote = false;

    return (
      <div className="Notes">
        <h1>Notes</h1>

        {Notes.renderNotes(selectedNote || notes)}
      </div>
    );
  }
}

export default Notes;
