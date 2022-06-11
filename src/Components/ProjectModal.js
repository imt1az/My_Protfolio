import React from "react";

const ProjectModal = ({ projectDes, setProjectDes }) => {
  const { name, Frontend, Backend, Live, Github, description } = projectDes;
  return (
    <div>
      <input type="checkbox" id="project-details" className="modal-toggle" />
      <div className="modal section">
        <div className="modal-box lg:w-12/12 w-full  max-w-7xl bg-slate-200 text-center ">
          <p className="font-semibold text-2xl text-accent mb-12">{name}</p>
          <div className="grid grid-cols-2 gap-8  justify-items-center mb-3">
            <div>
              <h2 className="font-bold text-accent mb-3 font-body text-xl">Description</h2>
              <p className="text-tertiary">{description}</p>
            </div>
            <div className="flex lg:flex-row flex-col gap-8 ">
              <div>
                <h2 className="font-bold text-accent font-body mb-3 text-xl">Frontend</h2>
                {Frontend.map((item, index) => {
                  return <p className="text-blue-700" key={index}>{item}</p>;
                })}
              </div>
              <div>
                <h2 className="font-bold text-accent font-body mb-3 text-xl">Backend</h2>
                {Backend.map((item, index) => {
                  return <p className="text-blue-700" key={index}>{item}</p>;
                })}
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="font-bold text-gray-900"><a href={Live}>Live Link</a></p>
                </div>
                <div>
                  <p className="font-bold text-gray-900"><a target="_blank" rel="noreferrer" href={Github}>Github</a></p>
                </div>

              </div>
            </div>
          </div>

          <div className="modal-action">
            <label for="project-details" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
