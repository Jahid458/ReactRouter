import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const {postId} = useParams();
  console.log(postId)
  const navigate = useNavigate();
  const { id, title, body } = post;

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Post Details about:{id}</h3>
      <p>Tittle: {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
