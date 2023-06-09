import { Box, Button, IconButton } from '@mui/material';
import { useGetFormsQuery, useCreateFormMutation, useDeleteFormMutation } from '../../graphql';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import TrashIcon from '@mui/icons-material/Delete';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
export default function Sidebar({
    selectedFormId,
    setSelectedFormId,
    isAdmin,
    setIsAdmin,
}: {
    selectedFormId: number | null,
    setSelectedFormId: (id: number) => void,
    isAdmin: boolean,
    setIsAdmin: (isAdmin: boolean) => void,
}) {
    const { data, refetch } = useGetFormsQuery();
    const [createForm] = useCreateFormMutation();
    const [deleteForm] = useDeleteFormMutation();
    
    return (
        <Box sx={{
            height: "100%",
            width: "250px",
            position: "fixed",
            left: 0,
            top: 0,
            paddingTop: "12px",
            background: "lightblue",
            overflowY: "auto",
        }}>
            <h2>Forms</h2>
            {data?.forms && data.forms.map((form) => (
                <Box display="flex" key={form.id} sx={{m: 1}}>
                    <Button fullWidth onClick={
                        () => setSelectedFormId(form.id)
                    } variant={selectedFormId === form.id ? "contained" : "outlined"} >{form.title.slice(0, 15) + (form.title.length > 15 ? "..." : "")}</Button>
                    <IconButton sx={{ml: 1}} onClick={
                        () => {
                            setSelectedFormId(form.id);
                            setIsAdmin(!isAdmin);
                        }
                    }>
                        <FormatAlignLeftIcon />
                    </IconButton>
                    <IconButton sx={{ml: 1}} onClick={
                        async () => {
                            const res = await deleteForm({
                                variables: {
                                    id: form.id,
                                },
                            });
                            if (!res.data?.deleteForm) {
                                alert("Error deleting form");
                            }
                            refetch();
                        }
                    }>
                        <TrashIcon />
                    </IconButton>
                </Box>
                
            ))}

            <Box sx={{m: 1, mt: 2}}>
                <Button onClick={
                    async () => {
                        const res = await createForm();
                        const newFormId = res.data?.createForm?.id;
                        if (newFormId === undefined) {
                            alert("Error creating form");
                            return;
                        }
                        setSelectedFormId(newFormId);
                        refetch();
                    }
                } variant="contained" color="secondary" fullWidth>
                    <PlusOneIcon />
                </Button>
            </Box>

        </Box>
    )
}