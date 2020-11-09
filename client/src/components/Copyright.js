import React from 'react'
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default (props) => {
  const { textColor = "white" } = props;
  return (
  <footer className="footer">
    <Box mt={2}>
      <Typography variant="body2" align="center" style={{marginTop: '75px', paddingBottom: '14px'}}>
        <Link href="https://google.com" style={{color: textColor}}>
          Copyright © John Hicks:<br/>
          NW Guide's River Catch {new Date().getFullYear()}
        </Link>
      </Typography>
    </Box>
  </footer>
  );
};
