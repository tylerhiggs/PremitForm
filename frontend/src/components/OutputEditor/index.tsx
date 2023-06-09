import {
    useGetFormOutputsQuery,
    useCreateFormOutputMutation,
} from "../../graphql";
import SingleEditor from "./SingleEditor";
import { useState, useEffect } from 'react';
import { Box, Button } from "@mui/material";

export default function OutputEditor({ selectedFormId }: { selectedFormId: number }) {
    const { data, refetch } = useGetFormOutputsQuery({
        variables: {
            formId: selectedFormId,
        },
    });

    const [createFormOutput] = useCreateFormOutputMutation();

    const [outputs, setOutputs] = useState(data?.form?.formOutputs ?? []);

    useEffect(() => {
        setOutputs(data?.form?.formOutputs ?? []);
        console.log(data?.form?.formOutputs)
    }, [data?.form?.formOutputs]);

    return (
        <Box sx={{width: "100%", height: "100%", m: 4, overflowY: "auto" }} display="flex" flexDirection="column">
            {outputs.map((output) => (
                <SingleEditor key={output.id} title={output.title} content={output.content} id={output.id} refetch={refetch} />
            ))}
            <Button variant="contained" onClick={async () => {
                const res = await createFormOutput({
                    variables: {
                        formId: selectedFormId,
                    },
                });
                if (!res.data?.createFormOutput) {
                    alert("Error creating form output");
                }
                refetch();
            }}>Add Form Result</Button>
        </Box>
    );
}