import { Box, CircularProgress, TextField, Button, IconButton, MenuItem, Stack, Switch, Typography } from '@mui/material';
import {
    useGetFormQuery,
    useGetFormOutputsQuery,
    useSetFormTitleMutation,
    useCreateQuestionMutation,
    useUpdateQuestionMutation,
    useUpdateOptionMutation,
    useCreateOptionMutation,
    useDeleteQuestionMutation,
    useDeleteOptionMutation,
    useCreateLogicMutation,
    useUpdateLogicMutation,
    useDeleteLogicMutation,
} from '../../graphql';
import { useState, useEffect } from 'react';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import TrashIcon from '@mui/icons-material/Delete';
export default function EditForm({
    selectedFormId,
}: {
    selectedFormId: number,
}) {
    const { data, loading, error, refetch } = useGetFormQuery({
        variables: {
            id: selectedFormId,
        },
    });

    const { data: outputData } = useGetFormOutputsQuery({
        variables: {
            formId: selectedFormId,
        },
    });


    const [setFormTitle] = useSetFormTitleMutation();
    const [createQuestion] = useCreateQuestionMutation();
    const [updateQuestion] = useUpdateQuestionMutation();
    const [deleteQuestion] = useDeleteQuestionMutation();
    const [createOption] = useCreateOptionMutation();
    const [updateOption] = useUpdateOptionMutation();
    const [deleteOption] = useDeleteOptionMutation();
    const [createLogic] = useCreateLogicMutation();
    const [updateLogic] = useUpdateLogicMutation();
    const [deleteLogic] = useDeleteLogicMutation();
    

    const onSaveTitle = async () => {
        const res = await setFormTitle({
            variables: {
                id: selectedFormId,
                title: title || "",
            },
        });
        if (!res.data?.updateForm) {
            alert("Error setting form title");
        }
    }


    const [title, setTitle] = useState(data?.form?.title || "");

    const [questions, setQuestions] = useState(data?.form?.questions || []);

    

    useEffect(() => {
        setTitle(data?.form?.title || "");
        setQuestions(data?.form?.questions || [])
        console.log("questions")
        console.log(data?.form?.questions)
    }, [data?.form?.title, data?.form?.questions]);

    return error ? (
        <Box>
            <h1>{error.name}</h1>
        </Box>
    ) : loading ? (
        <Box>
            <CircularProgress />
        </Box>
    ) : data?.form ? (
        <Box sx={{
            height: "100%",
            width: "100%",
            p: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            overflowY: "scroll",
        }}>
            <Box display="flex" justifyContent="center">
                <TextField variant="standard" label="Title" value={title} onChange={
                    (event) => {
                        setTitle(event.target.value);
                    }
                } onKeyDown={async (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        onSaveTitle();
                    }
                }} />
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{m: 1}}
                    onClick={onSaveTitle}
                    disabled={title === data.form.title}>Save</Button>
            </Box>
            {questions && questions.map((question, index) => (
                <Box key={question.id} sx={{mt: 2, border: 1, borderRadius: '16px', p: 2}}>
                    <h3>Question {index + 1}</h3>
                    <Box display="flex">
                        <TextField variant="standard" label="Question" value={question.content} onChange={(event) => {
                            setQuestions((prevQuestions) => !prevQuestions ? prevQuestions : prevQuestions.map((q, i) => {
                                if (i === index) {
                                    return {
                                        ...q,
                                        content: event.target.value,
                                    };
                                }
                                return q;
                            }));
                        }}
                        onKeyDown={async (event) => {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                const res = await updateQuestion({
                                    variables: {
                                        id: question.id,
                                        content: question.content,
                                    },
                                });
                                if (!res.data?.updateQuestion) {
                                    alert("Error updating question");
                                    return;
                                }
                            }
                        }} />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{m: 1}}
                            disabled={!data?.form?.questions || question.content === data?.form?.questions[index]?.content}
                            onClick={async () => {
                                const res = await updateQuestion({
                                    variables: {
                                        id: question.id,
                                        content: question.content,
                                    },
                                });
                                if (!res.data?.updateQuestion) {
                                    alert("Error updating question");
                                    return;
                                }
                        }}>Save</Button>
                        <IconButton onClick={async () => {
                            const res = await deleteQuestion({
                                variables: {
                                    id: question.id,
                                },
                            });
                            if (!res.data?.deleteQuestion) {
                                alert("Error deleting question");
                                return;
                            }
                            refetch();
                        }}>
                            <TrashIcon />
                        </IconButton>
                    </Box>
                    <ul>
                        {question?.options && question.options.map((option, optionIndex) => (
                            <li key={option.id}>
                                <TextField variant="standard" label="Option" value={option.content} onChange={(event) => {
                                    setQuestions((prevQuestions) => !prevQuestions ? prevQuestions : prevQuestions.map((q, i) => {
                                        if (i === index) {
                                            return {
                                                ...q,
                                                options: !q.options ? q.options : q.options.map((o, oi) => {
                                                    if (oi === optionIndex) {
                                                        return {
                                                            ...o,
                                                            content: event.target.value,
                                                        };
                                                    }
                                                    return o;
                                                }),
                                            };
                                        }
                                        return q;
                                    }));
                                }}
                                onKeyDown={async (event) => {
                                    if (event.key === "Enter") {
                                        event.preventDefault();
                                        const res = await updateOption({
                                            variables: {
                                                id: option.id,
                                                content: option.content,
                                            },
                                        });
                                        if (!res.data?.updateOption) {
                                            alert("Error updating option");
                                            return;
                                        }
                                    }
                                }} />
                                <Button
                                variant="contained"
                                color="primary"
                                sx={{m: 1}}
                                disabled={option.content === data?.form?.questions?.[index]?.options?.[optionIndex]?.content}
                                onClick={async () => {
                                    const res = await updateOption({
                                        variables: {
                                            id: option.id,
                                            content: option.content,
                                        },
                                    });
                                    if (!res.data?.updateOption) {
                                        alert("Error updating option");
                                        return;
                                    }
                                }}>Save</Button>
                                <IconButton onClick={async () => {
                                    const res = await deleteOption({
                                        variables: {
                                            id: option.id,
                                        },
                                    });
                                    if (!res.data?.deleteOption) {
                                        alert("Error deleting option");
                                        return;
                                    }
                                    refetch();
                                }}>
                                    <TrashIcon />
                                </IconButton>
                            </li>
                        )
                        )}
                    </ul>
                    <Button sx={{mt: 2}} variant="outlined" color="primary" startIcon={<PlusOneIcon />} onClick={async () => {
                        const res = await createOption({
                            variables: {
                                questionId: question.id,
                            },
                        });
                        if (!res.data?.createOption) {
                            alert("Error creating option");
                            return;
                        }
                        refetch();
                    }}>Add Option</Button>
                    {question?.logics && question.logics.map((logic, logicIndex) => (
                        <Stack direction="row" key={logic.id} sx={{mt: 2, p: 2}} spacing={1} alignItems="center" justifyContent="center">
                            <TextField select value={logicIndex === 0 ? "if" : logic.isElse ? "else" : "else if"} onChange={async (event) => {
                                const isElse = event.target.value === "else";
                                const res = await updateLogic({
                                    variables: {
                                        id: logic.id,
                                        isElse,
                                    },
                                });
                                if (!res.data?.updateLogic) {
                                    alert("Error updating logic");
                                    return;
                                }
                                refetch();
                            }}>
                                { logicIndex === 0 && <MenuItem value="if">if</MenuItem>}
                                {logicIndex !== 0 && <MenuItem value="else if">else if</MenuItem>}
                                {logicIndex === (question?.logics?.length || 0) - 1 && <MenuItem value="else">else</MenuItem>}
                            </TextField>
                            <TextField select value={logic.options?.map((option) => option.id) || []} SelectProps={{
                                multiple: true,
                                onChange: async (event) => {
                                    const options = (event.target.value as string[]).map((id) => Number(id)).filter((id) => !isNaN(id));
                                    
                                    const res = await updateLogic({
                                        variables: {
                                            id: logic.id,
                                            options,
                                        },
                                    });
                                    if (!res.data?.updateLogic) {
                                        alert("Error updating logic");
                                        return;
                                    }
                                    refetch();
                                }
                            }}>
                                {question.options?.map((o, i) => (
                                    <MenuItem key={o.id} value={o.id}>{`Option ${i + 1}`}</MenuItem>
                                ))}
                            </TextField>
                            <TextField select value={logic.isReturn ? "return" : "goto"} onChange={async (event) => {
                                const isReturn = event.target.value === "return";
                                const res = await updateLogic({
                                    variables: {
                                        id: logic.id,
                                        isReturn,
                                    },
                                });
                                if (!res.data?.updateLogic) {
                                    alert("Error updating logic");
                                    return;
                                }
                                refetch();
                            }}>
                                <MenuItem value="return">return</MenuItem>
                                <MenuItem value="goto">goto</MenuItem>
                            </TextField>
                            {logic.isReturn ? (
                                <TextField select value={logic.formOutput?.id || ""} onChange={async (event) => {
                                    const res = await updateLogic({
                                        variables: {
                                            id: logic.id,
                                            formOutputId: Number(event.target.value),
                                        },
                                    });
                                    if (!res.data?.updateLogic) {
                                        alert("Error updating logic");
                                        return;
                                    }
                                    refetch();
                                }}>
                                    {(outputData?.form?.formOutputs || []).map((output) => (
                                        <MenuItem key={output.id} value={output.id}>{output.title}</MenuItem>
                                    ))}
                                </TextField>
                            ) : (
                                <TextField select value={logic.nextQuestion?.id || ""} onChange={async (event) => {
                                    const res = await updateLogic({
                                        variables: {
                                            id: logic.id,
                                            nextQuestionId: Number(event.target.value),
                                        },
                                    });
                                    if (!res.data?.updateLogic) {
                                        alert("Error updating logic");
                                        return;
                                    }
                                    refetch();
                                }}>
                                    {(questions).filter((q) => q.id !== question.id).map((q) => (
                                        <MenuItem key={q.id} value={q.id}>{`Question ${q.index + 1}`}</MenuItem>
                                    ))}
                                </TextField>
                            )}
                            {question?.logics?.length === logicIndex + 1 && <IconButton onClick={async () => {
                            const safeLogics = question.logics || [];
                            if (safeLogics.length === 0) {
                                alert("No logics to delete");
                                return;
                            }
                            const res = await deleteLogic({
                                variables: {
                                    id: safeLogics[safeLogics.length - 1].id,
                                },
                            });
                            if (!res.data?.deleteLogic) {
                                alert("Error deleting logic");
                                return;
                            }
                            refetch();
                        }} disabled={question?.logics?.length === 0}><TrashIcon/></IconButton>}
                
                        </Stack>
                    ))}
                        <Button variant="outlined" color="success" sx={{mt: 2, ml: 1}} onClick={async () => {
                            const res = await createLogic({
                                variables: {
                                    isElse: false,
                                    questionId: question.id,
                                },
                            });
                            if (!res.data?.createLogic) {
                                alert("Error creating logic");
                                return;
                            }
                            refetch();
                        }}>Add Logic</Button>
                        
                            

                </Box>

            ))}
            <Button sx={{mt: 2}} variant="outlined" color="secondary" startIcon={<PlusOneIcon />} onClick={async () => {
                const res = await createQuestion({
                    variables: {
                        formId: selectedFormId,
                    },
                });
                if (!res.data?.createQuestion) {
                    alert("Error creating question");
                    return;
                }
                refetch();
            }}>Add Question</Button>
        </Box>
    ) : (
        <Box>
            <h1>Form not found</h1>
        </Box>
    )
}