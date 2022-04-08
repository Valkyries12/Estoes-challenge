import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../features/projectSlice";



const btnStyle = {
  backgroundColor: "#F5222D",
};

const validationSchema = yup.object({
  projectName: yup
    .string("Enter a project name")
    .required("Project name is required"),
  description: yup
    .string("Enter a description")
    .min(10, "Description should be of minimum 8 characters length")
    .required("Description is required"),
  projectManager: yup
    .string()
    .required("Project manager is required!"),
  assignedTo: yup.string().required("Assignation is required!"),
  status: yup.string().required("Status is required!"),
});

const AgregarForm = () => {
    const { projects } = useSelector(state => state);
    const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      projectName: "",
      description: "",
      projectManager: "",
      assignedTo: "",
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      const cantidadProyectos = projects.projects.length;
        dispatch(addProject({ id:  cantidadProyectos + 1, projectInfo: values.projectName, projectManager: values.projectManager, assignedTo: values.assignedTo, status: values.status}));
      console.log(values);
    },
  });

  return (
    <Paper
      sx={{ width: "50%", overflow: "hidden", margin: "0 auto", padding: "4%" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { mb: 5 },
          }}
        >
          <TextField
            fullWidth
            id="projectName"
            name="projectName"
            label="Project name"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            error={
              formik.touched.projectName && Boolean(formik.errors.projectName)
            }
            helperText={formik.touched.projectName && formik.errors.projectName}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <FormControl
            sx={{
              mb: 5,
            }}
            fullWidth
          >
            <InputLabel id="projectManager">Project Manager</InputLabel>
            <Select
              labelId="projectManager"
              id="projectManager"
              name="projectManager"
              value={formik.values.projectManager}
              label="Project manager"
              onChange={formik.handleChange}
              error={
                formik.touched.projectManager &&
                Boolean(formik.errors.projectManager)
              }
              helperText={
                formik.touched.projectManager && formik.errors.projectManager
              }
            >
              <MenuItem value={"Walt Cosani"}>Walt Cosani</MenuItem>
              <MenuItem value={"Yvonne Jennings"}>Yvonne Jennings</MenuItem>
              <MenuItem value={"Janco Haasjes"}>Janco Haasjes</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              mb: 5,
            }}
            fullWidth
          >
            <InputLabel id="assignedTo">Assigned to</InputLabel>
            <Select
              labelId="assignedTo"
              id="assignedTo"
              name="assignedTo"
              value={formik.values.assignedTo}
              label="Assigned to"
              onChange={formik.handleChange}
              error={
                formik.touched.assignedTo && Boolean(formik.errors.assignedTo)
              }
              helperText={formik.touched.assignedTo && formik.errors.assignedTo}
            >
              <MenuItem value={"Teunisje Van den Corput"}>Teunisje Van den Corput</MenuItem>
              <MenuItem value={"Alex Harris"}>Alex Harris</MenuItem>
              <MenuItem value={"Nicolas Caruso"}>Nicolás Caruso</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              mb: 5,
            }}
            fullWidth
          >
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              name="status"
              value={formik.values.status}
              label="Status"
              onChange={formik.handleChange}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
            >
              <MenuItem value={"enabled"}>Enabled</MenuItem>
              <MenuItem value={"disabled"}>Disabled</MenuItem>
            </Select>
          </FormControl>

          <Button style={btnStyle} variant="contained" type="submit">
            Create Project
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default AgregarForm;
