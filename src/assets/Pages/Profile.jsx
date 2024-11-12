import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';

const Profile = () => {
    const { email, logout, getProfile } = useContext(UserContext);
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getProfile();
                setProfileData(data);
            } catch (err) {
                setError("Error al cargar el perfil");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProfile();
    }, [getProfile]);

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            {isLoading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                profileData && <p>Email: {profileData.email || email}</p>
            )}
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Profile;
