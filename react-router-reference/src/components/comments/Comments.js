import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom'
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../hooks/use-http';
import { getAllComments } from "../lib/api"
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from "../comments/CommentsList"

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { sendRequest, status, data: loadedComments, error } = useHttp(getAllComments)
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // Ensures that this function is not recreated every time the function is rendered
  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // Use a helper variable to show content based on what is happening
  let comments;


  // Check if we are pending
  if (status === 'pending') {
    comments = <div className="centered">
      <LoadingSpinner />
    </div>

  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No comments were added yet!</p>
  }

  // output something if there is an error
  if (error) {
    return <p className='centered focused'>{error}</p>
  }



  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
