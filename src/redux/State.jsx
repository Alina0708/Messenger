let state = {
  myPostPage: {
    postsData: [
      {
        message:
          "Theory is when everything is known, but nothing works. Practice is when everything works, but no one knows why",
        likecount: "25",
      },
      {
        message: "If you suffer for a long time, something will work out",
        likecount: "30",
      },
    ],
  },
  messagesPage: {
    dialogsData: [
      //Massages
      { avtorLink: 1, avtor: "Alina" },
      { avtorLink: 2, avtor: "Victoria" },
      { avtorLink: 3, avtor: "Alexsander" },
      { avtorLink: 4, avtor: "Dima" },
      { avtorLink: 5, avtor: "Danik" },
    ],
    messagesData: [
      //Messages
      { sms: "Hi" },
      { sms: "How are you?" },
      { sms: "Where are you" },
    ],
  },
};

export default state;
