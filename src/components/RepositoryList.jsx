import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react/cjs/react.development";

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/christiano-santos/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map(repositore => {
            return <RepositoryItem key={repositore.name} repository={repositore}/>
          })
        }
      </ul>
    </section>
  );
}
