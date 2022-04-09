import { createSlice, current } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [
      {
        id: 1,
        projectName: "Landing page",
        projectManager: "Walt Cossani",
        assignedTo: "Ignacio Truffa",
        status: "enabled",
      },
      {
        id: 2,
        projectName: "E-commerce shop",
        projectManager: "Walt Cossani",
        assignedTo: "Ignacio Truffa",
        status: "enabled",
      },
      {
        id: 3,
        projectName: "CRM linkroom",
        projectManager: "Walt Cossani",
        assignedTo: "Ignacio Truffa",
        status: "enabled",
      },
    ],
  },
  reducers: {
    deleteProject: (state, action) => {
      const currentState = current(state);
      const filteredProject = currentState.projects.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...currentState,
        projects: filteredProject,
      };
    },
    addProject: (state, action) => {
      const currentState = current(state);
      return {
        ...currentState,
        projects: [...state.projects, action.payload],
      };
    },
    editProject: (state, action) => {
      const currentState = current(state); 
      const indexProject = currentState.projects.findIndex(item => item.id === parseInt(action.payload.id));
      const updatedProject = {...action.payload, projects: currentState.projects[indexProject].projectName}
      
      return [
        ...currentState.projects.slice(0, indexProject),
        updatedProject,
        ...currentState.projects.slice(indexProject + 1)
      ]

      // debugger
      // edited.id = action.payload.id;
      // edited.projectName = action.payload.projectName;
      // edited.description = action.payload.description;
      // edited.projectManager = action.payload.projectManager;
      // edited.assignedTo = action.payload.assignedTo;
      // edited.status = action.payload.status;

      // return {
      //   ...currentState,
      //   projects: [...currentState.projects, edited]
      // };
      
      // currentState.projects.map((item) =>  {
      //   debugger
      //   if (item.id === parseInt(action.payload.id)) {
      //     item.projectName = action.payload.projectName;
      //     item.description = action.payload.description;
      //     item.projectManager = action.payload.projectManager;
      //     item.assignedTo = action.payload.assignedTo;
      //     item.status = action.payload.status;
      //   }
      // })
      // return {
      //   // ...currentState,
      //   projects: [...currentState.projects]
      // }
      // return currentState.projects.map((item) => {
      //   if (item.id === parseInt(action.payload.id)) {
      //     return {
      //       ...item,
      //       projectName: action.payload.projectName,
      //       description: action.payload.description,
      //       projectManager: action.payload.projectManager,
      //       assignedTo: action.payload.assignedTo,
      //       status: action.payload.status,
      //     };
      //   }
      //   return item;
      // });
    },
  },
});

export const { deleteProject, addProject, editProject } = projectsSlice.actions;

export default projectsSlice.reducer;
