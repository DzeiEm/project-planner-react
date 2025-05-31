import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (setProjectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
