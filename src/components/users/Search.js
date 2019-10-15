import React, { useState, useContext } from "react";

import GitHubContext from "../../context/github/gitHubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const gitHubContext = useContext(GitHubContext);
  const alertContext = useContext(AlertContext);

  const { users, clearUsers } = gitHubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a query", "light");
    } else {
      gitHubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
