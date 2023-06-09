import { useState } from 'react';
import Sidebar from './Sidebar';
import EditForm from './EditForm';
import OutputEditor from './OutputEditor';
import FillForm from './FillForm';
import { Box } from '@mui/material';

export default function Admin() {
    const [selectedFormId, setSelectedFormId] = useState<number | null>(null);
    const [isAdmin, setIsAdmin] = useState(true);

    return isAdmin ? (
        <Box sx={{width: "100%", height: "100%"}}>
            <Sidebar selectedFormId={selectedFormId} setSelectedFormId={setSelectedFormId} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            <Box sx={{
                position: "absolute",
                left: 250,
                top: 0,
                right: 0,
                bottom: 0,
                display: "flex",
            }}>
                {selectedFormId && <EditForm selectedFormId={selectedFormId} />}
                {selectedFormId && <OutputEditor selectedFormId={selectedFormId} />}
            </Box>
        </Box>
    ) : (
        <FillForm/>
    )
}