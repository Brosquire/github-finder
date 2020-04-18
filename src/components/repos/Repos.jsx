import React from "react";
import ReposItem from "./ReposItem";
import PropTypes from "prop-types";

const Repos = ({ repo }) => {
  return repo.map((repo) => <ReposItem repo={repo} key={repo.id} />);
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
