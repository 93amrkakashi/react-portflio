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
            <br />
            <button class="cta">
              <span class="hover-underline-animation">
                
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  code
                </a>
              </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-horizontal"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  data-name="Path 10"
                  id="Path_10"
                ></path>
              </svg>
            </button>
            <br />

            <button class="cta">
              <span class="hover-underline-animation">
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live demo
                </a>
              </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-horizontal"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  data-name="Path 10"
                  id="Path_10"
                ></path>
              </svg>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Repo;
