import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { submit } from "./submit";

import DropZone from "components/dropzone";

const Form = (props) => {
  const { data, setData, media, setMedia, setIsOpened, setCreatedPost } = props;
  const [isValidPost, setIsValidPost] = useState(false);
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    if (data.text != "" || media) {
      setIsValidPost(true);
    } else {
      setIsValidPost(false);
    }
  }, [data, media]);
  return (
    <div className="flex flex-col gap-3 w-[280px] sm:w-[500px]">
      <textarea
        autoFocus
        value={data.text}
        className="mt-2"
        dir="auto"
        name="text"
        placeholder="Type Anything!"
        onChange={(e) => {
          setData((prev) => ({ ...prev, text: e.target.value }));
        }}
      />
      <DropZone files={media} setFiles={setMedia} />
      <button
        disabled={!isValidPost}
        className={`${
          isValidPost ? "bg-primary" : "bg-secondary"
        } self-end py-2 px-4 rounded-xl text-white`}
        onClick={async () => {
          setIsOpened(false);
          setData({ text: "", location: "" });
          setMedia(null);
          setCreatedPost(await submit(data, media, token));
        }}
      >
        Post
      </button>
    </div>
  );
};

export default Form;
