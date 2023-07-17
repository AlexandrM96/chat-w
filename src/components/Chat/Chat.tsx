import React, { useState } from 'react';
import  './Chat.scss'
import {ChatInterface} from "../../interfaces/chat.interface";

 export default function Chat(): JSX.Element {

     const [messages, setMessages] = useState<ChatInterface[]>([
         // {
         //     type: "",
         //     idMessage: "",
         //     timestamp: 0,
         //     typeMessage: "",
         //     chatId: "",
         //     textMessage: "",
         //     senderId: "",
         //     senderName: ""
         // }

     ]);

  const ApiUserLogin = () => {
    const baseUrl = 'https://api.green-api.com'
    fetch(
        `https://api.green-api.com/waInstance1101818610/GetChatHistory/3519ac4ae7f1431eb40d89af83abeefa94aab0d2acc74ab28b`
        , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                // 'Access-Control-Allow-Origin': '*',
                mode: 'no-cors',
            },
            body: JSON.stringify({
              "chatId": "79686586425@c.us",
              "count": 200,
          "countryInstance": "ru",
          "webhookUrl": "http://localhost:3000/",
          "webhookUrlToken": "",
          "delaySendMessagesMilliseconds": 1000,
          "markIncomingMessagesReaded": "no",
          "markIncomingMessagesReadedOnReply": "no",
          "outgoingWebhook": "yes",
          "outgoingMessageWebhook": "yes",
          "stateWebhook": "yes",
          "incomingWebhook": "yes",
          "deviceWebhook": "no",
          "statusInstanceWebhook": "yes"

  })
        }).then((response) => response.json())
        .then((data) => {
            setMessages(data);
            console.log(messages)
            }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}
ApiUserLogin()

  return (
    <div className="Chat">
        <div className='Chat__container'>
            {messages && messages.map((element:ChatInterface) =>
                    element.type === 'incoming' ?
                        <div className='Chat__container__incoming-message'>
                            <span>
                                {element.textMessage}
                            </span>
                        </div>
                        :
                        <div className='Chat__container__outgoing-messages'>
                            <span>
                                {element.textMessage}
                            </span>
                        </div>
            )}
        </div>
    </div>
  );
}
