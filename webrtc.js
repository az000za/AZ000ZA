const dataChannel = peerConnection.createDataChannel('myDataChannel');
setInterval(() => {
    dataChannel.send('Hello from sender!');
}, 1000);

peerConnection.ondatachannel = (event) => {
    const dataChannel = event.channel;
    dataChannel.onmessage = (messageEvent) => {
        console.log('Received:', messageEvent.data);
    };
};