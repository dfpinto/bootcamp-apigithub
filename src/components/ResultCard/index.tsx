import { Profile } from 'types/profile';
import './styles.css';

type Props = {
  profile: Profile;
};

const ResultCard = ({ profile }: Props) => {
  return (
    <div className="result-container">
      <div className="result-container-img">
        <img src={profile.avatar_url} alt="Avatar" />
      </div>
      <div className="result-container-data">
        <h6>Informações</h6>
        <table className="result-container-table">
          <tr>
            <th>
              <label>Perfil:</label>
            </th>
            <td>
              <p>{profile.html_url}</p>
            </td>
          </tr>
          <tr>
            <th>
              <label>Seguidores:</label>
            </th>
            <td>
              <p>{profile.followers}</p>
            </td>
          </tr>
          <tr>
            <th>
              <label>Localidade:</label>
            </th>
            <td>
              <p>{profile.location}</p>
            </td>
          </tr>
          <tr>
            <th>
              <label>Nome:</label>
            </th>
            <td>
              <p>{profile.name}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ResultCard;
