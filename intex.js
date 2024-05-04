const menuItems = document.querySelectorAll(".menu-item");
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

var root = document.querySelector(':root');

// remove line active in sidebar

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

//active line in sidebar
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// searchMessages

const searchMessages = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else chat.style.display = "none";
  });
};
messageSearch.addEventListener("keyup", searchMessages);

//messages box

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem $color-primary";
  messagesNotification.querySelector(".messages-count").style.display = "none";
  console.log(messages);
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});