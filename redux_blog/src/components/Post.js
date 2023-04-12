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

  const handleValid = () => {
    const data = {
      author: post.author,
      content: updateContent ? updateContent : post.content,
      date: post.date,
      updateDate: Date.now(),
    };

    axios
      .put(`http://localhost:3008/posts/${post.id}`, data)
      .then(() => setIsEdit(false));
  };

  const handleUpdateContent = (e) => {
    setUpdateContent(e.target.value);
  };

  const handleDelete = () => {
    if (window.confirm("Supprimer cet post ?")) {
      axios
        .delete(`http://localhost:3008/posts/${post.id}`)
        .then(() => setIsDelete(true))
        .then(() => window.location.reload());
    }
  };

  return !isDelete ? (
    <div
      className={
        isEdit
          ? "bg-cyan-100 p-5 shadow-lg  rounded-lg "
          : "bg-white p-5 shadow-lg  rounded-lg "
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
