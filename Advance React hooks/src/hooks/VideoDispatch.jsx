import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

export default function useVideoDispatch() {
  return useContext(VideoDispatchContext);
}
