const socket = io("http://localhost:81");

const inputMessage = document.getElementById("message");
const messages = document.getElementById("messages");

const handleSubmitNewMessage = () => {
  console.log(inputMessage.value);
  socket.emit("message", { data: inputMessage.value });
};

socket.on("message", ({ data }) => {
  handleNewMessage(data);
});

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  return li;
};
