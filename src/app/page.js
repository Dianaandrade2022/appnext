"use client";
import { useState } from "react";
import { Stack, TextField, Button, Typography } from "@mui/material";

export default function Home() {
  const [text, setText] = useState("");
  const [messages, setMenssage] = useState([]);

  const handlechange = (event) => {
    const value = event.target.value;
    setText(value);
  };

  const handleClic = () => {
    const newMenssage = {
      id: messages.length,
      message: text,
      createdAt: new Date(),
      userType: "user",
    };
    setMenssage([...messages, newMenssage]);
    setText("");
  };
  console.log(messages);
  console.log(messages.createdAt?.toLocaleString());

  return (
    <Stack spacing={2} p={1} height="100vh" width="100%">
      <Stack
        flexBasis="calc(100% - 60px)"
        sx={{
          overflowY: "auto",
          scrollbarColor:"revert"
        }}
        spacing={1}
      >
        {messages
          .map((i) => (
            <Stack
              key={i}
              flexShrink={0}
              width="80%"
              minHeight="50px"
              color="black"
              sx={{
                backgroundColor: "purple",
                borderRadius: "10px",
              }}
              p={1}
            >
              <Typography variant="body2" gutterBottom>
                {i.message}
              </Typography>
              <Typography variant="caption" gutterBottom>
                {i.createdAt?.toLocaleString()}
              </Typography>
            </Stack>
          ))}
      </Stack>
      <Stack
        flexShrink={0}
        direction="row"
        p={2}
        spacing={2}
        bottom={0}
        position="fixed"
        width="100%"
        backgroundColor="white"
      >
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={text}
          type="text"
          fullWidth
          onChange={handlechange}
        />
        <Button variant="contained" color="secondary" onClick={handleClic}>
          Send
        </Button>
      </Stack>
    </Stack>
  );
}
