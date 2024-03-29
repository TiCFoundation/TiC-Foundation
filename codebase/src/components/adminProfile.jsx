import React from 'react';

const AdminProfile = ({ user }) => {
    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <p>You are logged in as an Admin of Tic Foundation.</p>
        </div>
    );
}

export default AdminProfile;
