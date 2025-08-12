import React from "react";

const IndianPlayers = () => {
  const teamPlayers = [
    "Virat Kohli",
    "Rohit Sharma",
    "KL Rahul",
    "Shreyas Iyer",
    "Suryakumar Yadav",
    "Hardik Pandya",
  ];

  // Destructuring into odd/even index players
  const oddTeam = teamPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = teamPlayers.filter((_, index) => index % 2 === 0);

  // Two arrays
  const T20players = ["Virat Kohli", "Rohit Sharma", "Suryakumar Yadav"];
  const RanjiTrophyPlayers = ["Mayank Agarwal", "Cheteshwar Pujara"];

  // Merge arrays using spread operator
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>All Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
