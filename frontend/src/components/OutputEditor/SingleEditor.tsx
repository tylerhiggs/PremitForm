import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Box, Button, TextField } from "@mui/material";
import { useUpdateFormOutputMutation, useDeleteFormOutputMutation } from "../../graphql";
import { useState, useEffect } from "react";

export default function SingleEditor({
    content,
    id,
    refetch,
    title,
}: {
    id: number,
    title: string,
    content: string,
    refetch: () => void,
}) {
    const [updateFormOutput] = useUpdateFormOutputMutation();
    const [deleteFormOutput] = useDeleteFormOutputMutation();
    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
    });

    const [localTitle, setLocalTitle] = useState(title);

    useEffect(() => {
        setLocalTitle(title);
    }, [title]);

    const saveTitle = async () => {
        const res = await updateFormOutput({
            variables: {
                id,
                title: localTitle,
            },
        });
        if (!res.data?.updateFormOutput) {
            alert("Error updating form output");
        }
    }


    return (
    <Box sx={{w: "100%", m: 2}}>
        <Box display="flex">
            <TextField fullWidth label="Title" value={localTitle} onChange={(e) => {
                setLocalTitle(e.target.value);
            }} onKeyDown={(event) => {
                if (event.key === "Enter") {
                    saveTitle();
                }
            }}/>
            <Button onClick={saveTitle} disabled={title === localTitle}>Save Title</Button>
        </Box>

        <Box sx={{border: 1, borderRadius: 2, w: "100%", textAlign: "left", pl: 1}}>
            <EditorContent style={{border: 1, borderRadius: 3 }} editor={editor} />
        </Box>
        <Button variant="contained" onClick={async () => {
            if (!editor) {
                return;
            }
            const res = await updateFormOutput({
                variables: {
                    id,
                    content: editor.getHTML(),
                },
            });
            if (!res.data?.updateFormOutput) {
                alert("Error updating form output");
            }
        }} disabled={editor?.getHTML() === content}>Save</Button>
        <Button variant="contained" onClick={async () => {
            const res = await deleteFormOutput({
                variables: {
                    id,
                },
            });
            if (!res.data?.deleteFormOutput) {
                alert("Error deleting form output");
            }
            refetch();
        }}>Delete</Button>
    </Box>
    )
}