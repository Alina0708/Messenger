import classes from "./Music.module.css";
import ReactAudioPlayer from "react-audio-player";


const Music = () => {
  return (
    <div>
      {/* <ReactAudioPlayer
        src="url../../music/ostap-parfenov_-_ty-ne-koroleva-swerodo-remix.mp3"
        autoPlay
        controls
      /> */}

{/* <ReactVideo
            src='https://www.example.com/myvideo.mp4'
            poster='/poster.png'
            primaryColor="red"
            autoPlay
        /> */}
         <ReactAudioPlayer
              src="/your_audio_file.mp4"
              poster="/your_poster_file.png"
          />
    </div>
  );
};

export default Music;
