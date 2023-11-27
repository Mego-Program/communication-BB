<div>
{chatHistory.map(function renderMessage(entry, index) {
  const { message, user, time } = entry;
  return (
    // chat history
    <Stack
justify-content='space-around'
direction="row"
useFlexGap
flexWrap="wrap"

>
    <Grow key={index} in={true} timeout={1200}>
      <div
        style={{
          width: "85%",
          border: "1px solid ",
          borderRadius: "20px",
          color: "rgba(246, 201, 39, 1)",
          display: "flex",
          marginLeft: "220px",
          marginBottom: "44px",
        }}
      >
        <Avatar alt={user.name} src={user.avatar} />
        <div>
        <span style={{ fontWeight: "bold" }}>{user.name} </span>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "unset",
            color: "white",
          }}
        >
          {message}{" "}
        </p>
        <p>{time}</p>
        </div>
      </div>
    </Grow>
    </Stack> 
  );
})}
</div>