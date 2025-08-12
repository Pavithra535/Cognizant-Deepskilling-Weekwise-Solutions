import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "KL Rahul", score: 65 },
    { name: "Shreyas Iyer", score: 72 },
    { name: "Suryakumar Yadav", score: 40 },
    { name: "Hardik Pandya", score: 77 },
    { name: "Ravindra Jadeja", score: 55 },
    { name: "Rishabh Pant", score: 82 },
    { name: "Jasprit Bumrah", score: 60 },
    { name: "Bhuvneshwar Kumar", score: 69 },
    { name: "Yuzvendra Chahal", score: 48 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
