import React from 'react';

const ClientProfile = ({ user }) => {
    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <p>You are logged in as a client.</p>
        </div>
    );
}

export default ClientProfile;
