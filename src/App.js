import React, { useState } from "react";
import "./App.css";

const App = () => {
  // State to hold the workout details
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [workouts, setWorkouts] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!exercise || !duration || !date) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new workout object
    const newWorkout = {
      exercise,
      duration,
      date,
    };

    // Update the workouts state
    setWorkouts([...workouts, newWorkout]);

    // Clear the input fields
    setExercise("");
    setDuration("");
    setDate("");
  };

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Exercise:</label>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            placeholder="e.g., Push-ups"
          />
        </div>
        <div>
          <label>Duration (minutes):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g., 30"
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Workout</button>
      </form>

      <h2>Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts added yet.</p>
      ) : (
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              {workout.date} - {workout.exercise} for {workout.duration} minutes
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
