import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API endpoint:', endpoint);
        console.log('Fetched leaderboard:', data);
        setLeaders(data.results || data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader, idx) => (
                <tr key={idx}>
                  <td>{leader.name || '-'}</td>
                  <td>{leader.score || '-'}</td>
                  <td>
                    <button className="btn btn-info btn-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
