import React, { useState } from "react";
import axios from "axios";

const Post = ({ post, ...otherProps }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [updateContent, setUpdateContent] = useState("");

  const dateFormat = (date) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return newDate;
  };

  const handleIsEdit = () => {
    setIsEdit(true);
  };

  const handleValid = () => {};

  const handleUpdateContent = (e) => {
    setUpdateContent(e.target.value);
  };

  const handleDelete = () => {};

  return !isDelete ? (
    <div
      className={
        isEdit
          ? "bg-cyan-100 p-5 shadow-lg w-full rounded-lg border-2 border-cyan-500"
          : "bg-white p-5 shadow-lg  rounded-lg border-2 border-cyan-500"
      }
    >
      <h2 className="font-extrabold mb-3">{post.author}</h2>
      {isEdit ? (
        <textarea
          onChange={handleUpdateContent}
          autoFocus
          defaultValue={updateContent ? updateContent : post.content}
          className="border border-black w-[100%] h-40"
        ></textarea>
      ) : (
        <p>{updateContent ? updateContent : post.content}</p>
      )}
      <p className="flex justify-end mt-5" {...otherProps}>
        {dateFormat(post.date)}
      </p>
      <div className="flex flex-row gap-5 text-xs">
        <button
          onClick={isEdit ? handleValid : handleIsEdit}
          className="bg-gray-200 border border-black p-2"
        >
          {isEdit ? "Valider" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-gray-200 border border-black p-2"
        >
          Supprimmer
        </button>
      </div>
    </div>
  ) : null;
};

export default Post;
