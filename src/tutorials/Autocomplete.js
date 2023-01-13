import {Autocomplete, TextField} from "@mui/material";

const Myfile = () => {
    return(
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    )
}
export default Myfile