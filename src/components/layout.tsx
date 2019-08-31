import React, { FC } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4)
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  root: {
    display: "flex"
  }
}));

export const Layout: FC = ({ children }) => {
  const styles = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={styles.root}>
        <main className={styles.content}>
          <Container className={styles.container}>
            <Grid spacing={4} container>
              {children}
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
};
