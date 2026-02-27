import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', endpoint);
        console.log('Fetched teams:', data);
        setTeams(data.results || data);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Members</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{team.name || '-'}</td>
                  <td>{team.members ? team.members.length : '-'}</td>
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

export default Teams;
