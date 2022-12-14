
let initialState = {
    dialogsData: [
        //Massages
        {
          avtorLink: 1,
          imageAvatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPFgVNxnmfYu-rLv2PjN_2ns8JFpn-oxPn7CjLtuZZpihUhao-dIc3WyM4iAqo6fotEE&usqp=CAU",
          avtor: "Alina",
        },
        {
          avtorLink: 2,
          imageAvatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNvTdMCBEfuA3Nt44_uSRCRLBP1XUPSf6PVJikJdwKYHpFHMB4EQhnUFbdh7Tk0HG0Zw&usqp=CAU",
          avtor: "Victoria",
        },
        {
          avtorLink: 3,
          imageAvatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDj3gPi5Rgrpbpq7ZyYPvnIvrQSphiQxzqQ&usqp=CAU",
          avtor: "Alexsander",
        },
        {
          avtorLink: 4,
          imageAvatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LzhBn1Q6M_YAkwOXCoX9J8n_sMt_hhDndg&usqp=CAU",
          avtor: "Dima",
        },
        {
          avtorLink: 5,
          imageAvatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRupkqvJdmQPuKtH2p4k5RZcPmopnr2m7f8A&usqp=CAU",
          avtor: "Danik",
        },
      ],
      messagesData: [
        //Messages
        { sms: "Hi" },
        { sms: "How are you?" },
        { sms: "Where are you" },
      ],
      newMessageText: "",
    };

const messagePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "new-Message":
      return{
        ...state,
        newMessageText:  action.myMessage

      };
    case "send-Message":
      let newSendMessage = {
        sms: state.newMessageText,
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newSendMessage],
        newMessageText : ""
      }
      default: return state;
  }
};

export default messagePageReducer;
