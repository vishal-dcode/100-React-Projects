import useVideoDispatch from "../hooks/VideoDispatch";

export default function Video({
  id,
  title,
  channelName,
  subscribersNo,
  liftStateUpEditVideo
}) {
  const dispatch = useVideoDispatch();

  return (
    <>
      <div className="video-ctr">
        <div
          className="close-btn"
          onClick={() => dispatch({ type: "deleteVideo", payload: id })}
        >
          X
        </div>
        <div onClick={() => liftStateUpEditVideo(id)} className="edit-btn">
          edit
        </div>
        <img
          className="video-thumbnail"
          src={`https://source.unsplash.com/random/?${title}`}
          alt="thumbnail"
        />
        <div className="video-content">
          <h3 className="video-title">{title}</h3>
          <div className="video-channel_details">
            <img
              className="video-profile_pic"
              src={`https://source.unsplash.com/random/500X500/?portrait-${title}`}
              alt="profile-pic"
            />
            <div>
              <h5 className="video-channel_name">{channelName}</h5>
              <span className="video-channel_subs">
                {subscribersNo}K Subscribers
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
