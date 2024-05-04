document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.altKey) {
        var chat = document.querySelector("div[role='textbox']");
        if (chat && chat.tabIndex >= 0) {
            chat.scrollIntoView();
            chat.focus();
            console.log("Focused on chat box");
        } else {
            console.log("Chat box not focusable");
        }
        console.log("Element details:", chat);
    }
});

console.log("Chat shortcut loaded successfully!");