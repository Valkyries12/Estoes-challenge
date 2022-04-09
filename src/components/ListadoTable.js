import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import RowTable from "./RowTable";
import "../index.css";

const styles = {
  typography: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },
  tableHead: {
    padding: "15px 4px",
    border: "1px solid #D9D9D9",
  },
};

const ListadoTable = ({ data }) => {
  return (
    <Paper
      sx={{
        width: "90%",
        overflow: "hidden",
        margin: "0 auto",
        border: "1px solid #D9D9D9",
        borderRadius: "4px"
      }}
    >
      <Grid
        container
        style={styles.tableHead}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item xs={2}>
          <Typography style={styles.typography}>Project name</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>Project Manager</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>Assigned to</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>Status</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>Action</Typography>
        </Grid>
      </Grid>

      {data.map((item) => (
        <RowTable key={item.id} dataRow={item} />
      ))}
    </Paper>
  );
};

export default ListadoTable;
