import consumer from "./consumer";

consumer.subscriptions.create("ArticleChannel", {
  connected() {
    console.log("Connected to article channel");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data);
  },
});
