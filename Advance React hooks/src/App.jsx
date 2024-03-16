import { useState, useEffect, useReducer } from "react";
import axios from "axios";

// useContext for transfer data
import ThemeContext from "./context/ThemeContext.jsx";
import VideosContext from "./context/VideosContext.jsx";
import VideoDispatchContext from "./context/VideoDispatchContext.jsx";

import "./styles.css";
import Video from "./components/Video.jsx";
import AddVideo from "./components/AddVideo.jsx";
// Video Data from JSON file
// import videosDB from "./data/video.json";

export default function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");

  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "loadAPI":
        return action.payload;
      case "addVideo":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "deleteVideo":
        return videos.filter((video) => video.id !== action.payload);
      case "updateVideo":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const copyUpdatingVideo = [...videos];
        copyUpdatingVideo.splice(index, 1, action.payload);
        setEditableVideo(null); //reset's the button to UPLOAD VIDEO
        return copyUpdatingVideo;
      default:
        return videos;
    }
  };

  const urlAPI = "https://my.api.mockaroo.com/video.json?key=ac686ab0";
  async function handleClick() {
    const res = await axios.get(urlAPI);
    dispatch({ type: "loadAPI", payload: res.data });
  }
  useEffect(() => {
    handleClick();
  }, []);

  const [videos, dispatch] = useReducer(videoReducer, []);

  function liftStateUpEditVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  const themeText = () => {
    if (mode === "darkMode") {
      return "Light Mode";
    } else {
      return "Dark Mode";
    }
  };

  const toggleMode = () => {
    setMode(mode === "darkMode" ? "lightMode" : "darkMode");
  };

  useEffect(() => {
    document.body.classList.remove("lightMode", "darkMode");
    document.body.classList.add(mode);
  }, [mode]);

  return (
    <div className={`${mode}`}>
      <ThemeContext.Provider value={mode}>
        <VideosContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <div
              className="btn-theme"
              onClick={() => {
                toggleMode();
              }}
            >
              {themeText()}
            </div>
            <AddVideo
              // liftStateUpAddVideo={liftStateUpAddVideo}
              editableVideo={editableVideo}
              // updateVideo={updateVideo}
            />
            <section className="video-wrapper">
              {/* MAP() Higher Order Function */}
              {videos.map((video, idx) => (
                <Video
                  key={idx}
                  id={video.id}
                  title={video.title}
                  channelName={video.channelName}
                  subscribersNo={video.subscribersNo}
                  profilePic={video.profilePic}
                  // liftStateUpDeleteVideo={liftStateUpDeleteVideo}
                  liftStateUpEditVideo={liftStateUpEditVideo}
                />
              ))}
            </section>
          </VideoDispatchContext.Provider>
        </VideosContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
