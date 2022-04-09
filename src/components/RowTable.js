import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomizedMenus from "./CustomizedMenus";

const styles = {
  typography: {
    textAlign: "center",
    fontSize: "15px",
    color: "#595959",
    fontWeigth: "600",
  },
  tableRow: {
    padding: "12px 4px",
    borderBottom: "1px solid #D9D9D9",
    alignItems: "center"
  },
  menu: {
      textAlign: "center"
  }
};

const RowTable = ({ dataRow }) => {
  return (
    
      <Grid
        container
        style={styles.tableRow}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item xs={2}>
          <Typography style={styles.typography}>
            {dataRow.projectName}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>
            {dataRow.projectManager}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>
            {dataRow.assignedTo}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>{dataRow.status} </Typography>
        </Grid>
        <Grid item xs={2} style={styles.menu}>
              <CustomizedMenus key={dataRow.id}  id={dataRow.id} />
        </Grid>
      </Grid>
   
  );
};

export default RowTable;
