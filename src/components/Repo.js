import React from "react";
import { useEffect, useState } from "react";

const Repo = () => {
  const [repos, setrepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/93amrkakashi/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setrepos(data);
      });
  }, []);

  return (
    <>
      {repos.map((repo) => {
        return (
          <div className="repo">
            <h3 className="repo-name">{repo.name}</h3>
            <a href={repo.html_url}>repo on github</a>
            <br />
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              live demo
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Repo;
