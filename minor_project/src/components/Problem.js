import React,{useEffect} from 'react';
import HomeNav from './homenav';
import {Table,TableBody,TableCell,TableHead,TableRow} from '@mui/material';
const Problem=() => {

    // useEffect(()=>{
    //     getAllProbs();
    // },[]);

    // const getAllProbs = async () => {
    //     let response = await Problemm();
    //     console.log(response);
    // }
    return (
    <div>
        <HomeNav/>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>Question</TableCell>
                <TableCell>Solution</TableCell>
                <TableCell>Difficulty</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>

        </Table>
    </div>
  )
}

export default Problem
