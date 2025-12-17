import React from "react";

const Stats = () => {
  const stats = {
    projects: 13,
    certificates: 7
  };

  return (
    <div className="flex gap-10 justify-center mt-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold">{stats.projects}</h2>
        <p className="text-gray-400">Projects</p>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">{stats.certificates}</h2>
        <p className="text-gray-400">Certificates</p>
      </div>
    </div>
  );
};

export default Stats;
