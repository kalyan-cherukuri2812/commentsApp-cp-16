import './index.css'

const CommentItem = props => {
  const {commentDetailsList, likeFunc, delFunc} = props
  const {id, name, comment, isLiked, date, initialBg} = commentDetailsList
  const initial = name[0].toUpperCase()

  const likeBtn = () => {
    likeFunc(id)
  }
  const deleteBtn = () => {
    delFunc(id)
  }
  return (
    <li className="com-list">
      <div className="list-card-1">
        <p className={initialBg}>{initial}</p>
        <div>
          <div className="name-card">
            <p className="name"> {name}</p>
            <p className="time">{date}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-del-cont">
        <div className="like-container">
          <button type="button" className="button" onClick={likeBtn}>
            <img
              className="like-img"
              src={
                isLiked === false
                  ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
              }
              alt="like"
            />
          </button>
          <p className={isLiked === false ? 'like' : 'liked'}>Like</p>
        </div>
        <button
          type="button"
          testid="delete"
          className="button"
          onClick={deleteBtn}
        >
          <img
            className="del-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
