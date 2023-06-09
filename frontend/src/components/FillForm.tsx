// import { useState } from 'react';
// import { useGetFormQuery } from '../graphql';
// import { Stack, Checkbox, Radio, Typography, Button } from '@mui/material';
// export default function FillForm({
//     id,
// }: {
//     id: number,
// }) {
export default function FillForm() {
    // const { data } = useGetFormQuery({
    //     variables: {
    //         id,
    //     },
    // });

    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

    // return data?.form?.questions?.length ? (
    //     <Stack direction="column" spacing={2}>
    //         <h1>{data?.form?.title}</h1>
    //         <h2>{data.form.questions[currentQuestionIndex].content}</h2>
    //         {data.form?.questions?.[currentQuestionIndex]?.options?.map((option) => data.form?.questions?.[currentQuestionIndex]?.multiple ? (
    //             <Stack direction="row" spacing={2}>
    //                 <Checkbox key={option.id} checked={selectedOptions.includes(option.id)} onChange={(event) => {
    //                     if (event.target.checked) {
    //                         setSelectedOptions([...selectedOptions, option.id]);
    //                     } else {
    //                         setSelectedOptions(selectedOptions.filter((id) => id !== option.id));
    //                     }
    //                 }}/>
    //                 <Typography>{option.content}</Typography>
    //             </Stack>
    //         ) : (
    //             <Stack direction="row" spacing={2}>
    //                 <Radio key={option.id} checked={selectedOptions.includes(option.id)} onChange={(event) => {
    //                     if (event.target.checked) {
    //                         setSelectedOptions([option.id]);
    //                     } else {
    //                         setSelectedOptions([]);
    //                     }
    //                 }}/>
    //                 <Typography>{option.content}</Typography>
    //             </Stack>
    //         ))}
    //         <Button sx={{mt: 2}} variant="contained" color="primary" onClick={() => {

    //         }}>Next</Button>
    //     </Stack>
    // ) : (
    //     <h1>Is empty</h1>
    // )
    return (
        <h1>FillForm: User can fill out the forms created on the admin page</h1>
    )

}