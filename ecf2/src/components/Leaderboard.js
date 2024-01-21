import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import transitionhill from '../assets/transition-hill.png'
import axios from 'axios';

function Leaderboard() {

    const [leaderboardData, setLeaderboardData] = useState([]);
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/data  '); // Replace with your endpoint
          setLeaderboardData( response.data);
          console.log(leaderboardData)
        } catch (error) {
          console.error('Error:', error);
        }
      }
    useEffect(() => {
        
        fetchData();
    }, []);

    return (
        <div id="scroll2">
            <div className="leaderboard">
                <h1 className='leaderboard-h1'>LEADERBOARD</h1>
                <ul>
                    {leaderboardData.map((entry, index) => (
                        <li key={index}>
                            <div className="leaderboard-entry-details">
                                <div className="leaderboard-entry-logo">Logo</div>
                                <div className='leaderboard-entry-user'>
                                    <span className="leaderboard-entry-name">{entry.name}</span><br></br>
                                    <span className="leaderboard-entry-comment">"{entry.message}"</span>
                                </div>
                                <span className="leaderboard-entry-amount">{entry.amount} Trees</span>

                            </div>
                        </li>
                    ))}
                </ul>

            </div>
            <img src={transitionhill} style={{ width: '100%', marginBottom: '-150px' }}></img>
        </div>

    );
}

export default Leaderboard;