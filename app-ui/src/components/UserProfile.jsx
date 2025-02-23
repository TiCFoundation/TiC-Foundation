import React, { Component } from 'react';
import Loading from './loading';
import ClientProfile from './clientProfile';
import AdminProfile from './adminProfile';
import axios from 'axios'; // Import Axios for making HTTP requests

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: true
        };
    }

    componentDidMount() {
        // Fetch user data from the database
        axios.get(`/user/${userId}`) // Make a GET request to fetch user data
            .then(response => {
                const user = response.data; // Extract user data from response
                this.setState({ user, isLoading: false });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { user, isLoading } = this.state;

        if (isLoading) {
            return <Loading />;
        }

        if (user && user.role === 'Admin') {
            return <AdminProfile user={user} />;
        } else if (user && user.role === 'Client/Student') {
            return <ClientProfile user={user} />;
        } else {
            return <div>Error: User data not found</div>;
        }
    }
}

export default UserProfile;
