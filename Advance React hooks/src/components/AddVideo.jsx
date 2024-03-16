import { useEffect, useState, useRef } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialState = {
  subscribersNo: "148K",
  title: "",
  channelName: ""
};

export default function AddVideo({ editableVideo }) {
  const [video, setVideo] = useState(initialState);
  const dispatch = useVideoDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "updateVideo", payload: video });
    } else {
      dispatch({ type: "addVideo", payload: video });
    }
    setVideo(initialState);
  };
  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  const focusRef = useRef();

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <>
      <form className="form-ctr">
        <input
          ref={focusRef}
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={video.title}
        />
        <input
          type="text"
          name="channelName"
          onChange={handleChange}
          placeholder="Channel Name"
          value={video.channelName}
        />
        <button className="btn" onClick={handleSubmit}>
          {editableVideo ? "Edit" : "Upload"} Video
        </button>
      </form>
    </>
  );
}
