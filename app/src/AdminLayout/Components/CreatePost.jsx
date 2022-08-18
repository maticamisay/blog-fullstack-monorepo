import { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import LoginContext from "../../context/LoginContext.js";
import postServices from "../../services/posts.js";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [content, setContent] = useState("");
  const { token, setToken } = useContext(LoginContext);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setToken(`Bearer ${user.token}`);
    }
  }, [setToken]);
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  let navigate = useNavigate();
  const addPost = (e) => {
    e.preventDefault();
    const postObject = {
      title,
      imgSrc,
      content,
    };
    console.log(token);
    postServices.create(postObject, { token }).then(
      (returnedPost) => {
        console.log(returnedPost);
      },
      function (reason) {
        console.log(reason); // Error!
        navigate("/login");
      }
    );
    setTitle("");
    setImgSrc("");
    setContent("");
  };
  return (
    <Container className="mt-5">
      <h1 className="py-3">Comienza a crear</h1>
      <Form
        className="d-flex align-items-center justify-content-center row"
        onSubmit={addPost}
      >
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Titulo del blog</Form.Label>
          <Form.Control
            type="text"
            value={title}
            placeholder="Ingrese el título"
            onChange={({ target }) => setTitle(target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Source de la imagen de Preview</Form.Label>
          <Form.Control
            type="text"
            value={imgSrc}
            placeholder="Ingrese la dirección de la imagen del post"
            onChange={({ target }) => setImgSrc(target.value)}
          />
        </Form.Group>
        {/* <h2>Imagen de preview</h2>
        <ReactQuill
          theme="snow"
          modules={modules}
          value={imgSrc}
          onChange={setImgSrc}
          // className="bubble-editor"
        /> */}
        <h2>Contenido del blog</h2>
        <ReactQuill
          theme="snow"
          modules={modules}
          value={content}
          onChange={setContent}
        />
        {/* <Button className="mt-3" onClick={addPost}> */}
        <Container className="d-flex justify-content-center row">
          <Button className="mt-3" type="submit">
            Crear
          </Button>
        </Container>
      </Form>
      {/* <h2>Titulo del blog</h2>
      <ReactQuill
        theme="bubble"
        value={title}
        onChange={setTitle}
        className="bubble-editor"
      /> */}
    </Container>
  );
};

export default CreatePost;
