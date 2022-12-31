messenger.composeAction.onClicked.addListener(async (tab, info) => {
    // Get the current body text
    let details = await messenger.compose.getComposeDetails(tab.id);
    // Replace it with the empty string
    details.plainTextBody = "";
    // Send the empty message body
    await messenger.compose.setComposeDetails(tab.id, details);
    // Check if the message body is empty by dumping it to the console
    details = await messenger.compose.getComposeDetails(tab.id);
    console.debug("plainTextBody:", details.plainTextBody);
});

messenger.browserAction.onClicked.addListener(() => messenger.compose.beginNew({
    isPlainText: true,
    plainTextBody: "Lorem ipsum dolor sit amet"
}))