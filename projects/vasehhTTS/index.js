document.addEventListener('DOMContentLoaded', (event) => {
    const consoleOutput = document.getElementById('consoleOutput');

    function logToConsole(message) {
        const consoleOutput = document.getElementById('consoleOutput');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        consoleOutput.appendChild(newMessage);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }


    const encryptedKeys = 'U2FsdGVkX1+IfWo59g5FiUoxZmEQStoNULl8H9CUTukPjRUIPEkHjPL/Cenxulg5qteD5OoyysjE0XUqWZUB6wNRuRaNMR7nYKYUY1iqyb1XMp8nYi44bW8wOj4M8irTxNDr0pPQVdcVPDvXNYlryM6dSN9y3maAB9lrttvZTr0+SgPWfuxaEU6P6l4nJ5GOGbr1Lndso9n+jPwfLmKoCik6ntYc2rbcx7bT4VZWWDOk26NE/Via9LHYw0HK5T+NgtlQcTNdhndMTRALkWtAAya6oqR7bSNEGTaszX5UZWJek8Z4OKvvp9176eUiUu38fXs6vr4d5v0q//QTFnfEqu6VMC1xStVupPnrXBS3c1U='; // Replace with your encrypted keys
    const secret = 'your-secret-passphrase';

    const decryptedKeys = JSON.parse(CryptoJS.AES.decrypt(encryptedKeys, secret).toString(CryptoJS.enc.Utf8));

    const twitchOAuthToken = decryptedKeys.twitchOAuthToken;
    const twitchClientID = decryptedKeys.twitchClientID;
    const twitchChannelID = decryptedKeys.twitchChannelID;
    const elevenLabsAPIKey = decryptedKeys.elevenLabsAPIKey;
    //const elevenlabsVoiceID = 'srUyX1KiPXUS7jvGq3HY'; // Default voice

    function connectTwitchPubSub() {
        const ws = new WebSocket('wss://pubsub-edge.twitch.tv');

        ws.onopen = () => {
            logToConsole('Attempting to connect to Twitch PubSub...')
            const message = {
                type: 'LISTEN',
                nonce: 'unique_nonce',
                data: {
                    topics: [`channel-bits-events-v2.${twitchChannelID}`],
                    auth_token: twitchOAuthToken
                }
            };
            ws.send(JSON.stringify(message));
            logToConsole('Connected to Twitch PubSub');
        };

        ws.onmessage = event => {
            const message = JSON.parse(event.data);
            if (message.type === 'MESSAGE') {
                const bitsMessage = JSON.parse(message.data.message);
                handleBitsEvent(bitsMessage);
            }
        };

        ws.onerror = error => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('Disconnected from Twitch PubSub');
            setTimeout(connectTwitchPubSub, 5000);
        };
    }
    
    let elevenlabsVoiceID = 'srUyX1KiPXUS7jvGq3HY'; // Default voice
    const selectedVoice = document.getElementById('voiceSelector');
    selectedVoice.addEventListener('change', handleVoiceChange);

    function handleVoiceChange() {
        const newSelectedVoice = selectedVoice.value;
        switch (newSelectedVoice) {
            case 'Vasehh':
                elevenlabsVoiceID = 'srUyX1KiPXUS7jvGq3HY';
                logToConsole(`Selected voice: ${newSelectedVoice}`);
                break;
            case 'Phoenix':
                elevenlabsVoiceID = 'uIOPHXRRaPBHQzb3tDcx';
                logToConsole(`Selected voice: ${newSelectedVoice}`);
                break;
            case 'Pratul':
                elevenlabsVoiceID = 'y6Ao4Y93UrnTbmzdVlFc';
                logToConsole(`Selected voice ID: ${newSelectedVoice}`);
                break;
            default:
                logToConsole(`Unknown voice selected: ${newSelectedVoice}`);
                break;
        }
    }

    const ignoreVasehhBits = document.getElementById('ignoreVasehhBits');
    ignoreVasehhBits.addEventListener('click', handleIgnoreVasehhBits);

    function handleIgnoreVasehhBits() {
        if (ignoreVasehhBits.checked) {
            logToConsole('Ignoring Vasehh bits');
        }
        else {
            logToConsole('Not ignoring Vasehh bits');
        }
    }

    const button = document.getElementById('convertButton');
    button.addEventListener('click', handleButtonPress);
    
    function handleButtonPress() {
        const chatMessage = document.getElementById('inputText').value;
        sendToElevenLabs(chatMessage);
    }

    function handleBitsEvent(bitsMessage) {
        if (ignoreVasehhBits.checked === false) {
            const bitsUsed = bitsMessage.data.bits_used;
            let chatMessage = bitsMessage.data.chat_message;
            const sender = bitsMessage.data.user_name;
            chatMessage = chatMessage.replace(/Cheer\d+/g, '').trim();

            logToConsole(`Received ${bitsUsed} bits with message: ${chatMessage}`);

            if (sender === 'olanorw_') {
                if (bitsUsed >= 1) {

                    if (chatMessage.includes('nigger')) {
                        // Skip the message
                        console.log("Skipping message");
                    }
                    if (chatMessage.includes('nigga')) {
                        // Skip the message
                        console.log("Skipping message");
                    }
                    else {
                    sendToElevenLabs(chatMessage);
                    }
                }
            }

            if (bitsUsed >= 100) {
                if (chatMessage.includes('nigger')) {
                    // Skip the message
                    logToConsole("Skipping message");
                }
                if (chatMessage.includes('nigga')) {
                    // Skip the message
                    logToConsole("Skipping message");
                }
                else {
                    sendToElevenLabs(chatMessage);
                }
            }
        }
        
        else {
            logToConsole("Bits donated to Vasehh, ignoring...")
        }
    }

    function sendToElevenLabs(chatMessage) {
        
        const options = {
            method: 'POST',
            headers: {
                'xi-api-key': elevenLabsAPIKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: chatMessage,
                model_id: 'eleven_turbo_v2',
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 1
                }
            })
        };
        logToConsole('Attempting to send message to the ElevenLabs API...')
        fetch(`https://api.elevenlabs.io/v1/text-to-speech/${elevenlabsVoiceID}`, options)
            .then(response => response.arrayBuffer())
            .then(buffer => {
                const base64Audio = btoa(
                    new Uint8Array(buffer)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                const audioPlayer = document.getElementById('audioPlayer');
                audioPlayer.src = `data:audio/mp3;base64,${base64Audio}`;
                audioPlayer.volume = 0.15;
                audioPlayer.play();
                logToConsole('Audio file received from ElevenLabs API and played successfully');
            })
            .catch(err => logToConsole.error(err));
    }

    connectTwitchPubSub();
});
