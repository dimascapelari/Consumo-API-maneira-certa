import { useFetcth } from "./hooks/useFecth";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetcth<Repository[]>(
    "users/dimascapelari/repos"
  );
  // useEffect(() => {
  //   fetch("https://api.github.com/users/dimascapelari/repos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRepositories(data);
  //     });
  // }, []);

  // console.log(repositories);

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
