import { Button, Grid,} from '@material-ui/core'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
<Grid container xs={12} md={12} lg={12} alignItems="center" justifyContent="center" classname="main-nav">
                
                <Grid item xs={1} md={1} lg={1}></Grid>


                <Grid item xs={1} md={1} lg={1}>
                <h2 className="logo">Lakshya</h2>
                </Grid>


                <Grid item xs={8} md={8} lg={8}></Grid>


                <Grid item xs={1} md={1} lg={1}>
                    <Link to='/login' style={{textDecoration:"none"}} >    
                    <Button variant="contained" color="primary" className="signin">Sign in</Button>
                    </Link>
                </Grid>


                <Grid item xs={1} md={1} lg={1}></Grid>

                </Grid>
        </>
    )
}

export default Navbar
