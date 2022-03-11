import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import { Profile } from 'types/profile';

type FormData = {
  login: string;
};

const ProfileGithub = () => {
  const [profile, setProfile] = useState<Profile>();
  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="container github-search-container">
      <div className="search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={formData.login}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="response-container">
        {profile && (
          <>
            <ResultCard profile={profile} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileGithub;
