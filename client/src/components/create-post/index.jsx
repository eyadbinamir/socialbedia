import { useSelector } from "react-redux";
import { useState } from "react";

import Dialog from "components/dialog";
import UserPicture from "components/UserPicture";

import Form from "./form";

import { ReactComponent as PhotoIcon } from "assets/icons/photo.svg";
import { ReactComponent as VideoIcon } from "assets/icons/video.svg";

const CreatePost = () => {
  const user = useSelector((state) => state.user);
  const [isOpened, setIsOpened] = useState(false);
  const [data, setData] = useState({ text: "", location: "" });
  const [media, setMedia] = useState([]);
  const theme = useSelector((state) => state.settings.theme);

  return (
    <section
      className={`create-post bg-200 w-full px-4 pt-5 pb-1 rounded-xl flex flex-col gap-3 shadow-md ${
        theme === "light" ? "border" : ""
      }`}
    >
      <div className="flex gap-3 items-center">
        <UserPicture
          id={user._id}
          src={user.avatarPath}
          name={`${user.firstName} ${user.lastName}`}
        />
        <div
          onClick={() => setIsOpened(!isOpened)}
          className="cursor-pointer h-[2.75rem] text-ellipsis overflow-clip rounded-xl bg-300 p-2 w-full shadow-md"
          style={{ lineHeight: 2 }}
        >
          {data.text || "Type Anything!"}
        </div>
      </div>
      <div className="flex items-center">
        <div
          onClick={() => setIsOpened(!isOpened)}
          className="icon text-hovered p-3 flex items-center gap-3 cursor-pointer w-full justify-center"
        >
          <PhotoIcon className="w-7" /> Photo
        </div>
        <span className={`bg-inverse h-7 w-[1px] opacity-10`}></span>
        <div
          onClick={() => setIsOpened(!isOpened)}
          className="icon text-hovered p-3 flex items-center gap-3 cursor-pointer w-full justify-center"
        >
          <VideoIcon className="w-7" /> Video
        </div>
        <Dialog isOpened={isOpened} setIsOpened={setIsOpened}>
          <Form
            setIsOpened={setIsOpened}
            data={data}
            setData={setData}
            media={media}
            setMedia={setMedia}
          />
        </Dialog>
      </div>
    </section>
  );
};

export default CreatePost;
