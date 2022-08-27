import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {ipName: '', ipComment: '', commentList: []}

  nameChange = event => {
    this.setState({
      ipName: event.target.value,
    })
  }

  commentChange = event => {
    this.setState({ipComment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {ipName, ipComment} = this.state
    const initialBgC = `initial-card ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: ipName,
      comment: ipComment,
      isLiked: false,
      date: formatDistanceToNow(new Date()),
      initialBg: initialBgC,
    }
    this.setState(prev => ({
      commentList: [...prev.commentList, newComment],
      ipName: '',
      ipComment: '',
    }))
  }

  delFunc = id => {
    this.setState(prev => ({
      commentList: prev.commentList.filter(each => each.id !== id),
    }))
  }

  likeFunc = id => {
    this.setState(prev => ({
      commentList: prev.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {ipName, ipComment, commentList} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div>
          <div className="card">
            <img
              className="com-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <form onSubmit={this.addComment}>
              <div className="sub-card">
                <p className="para">Say something about 4.0 Technologies</p>

                <input
                  onChange={this.nameChange}
                  value={ipName}
                  className="name-input"
                  type="text"
                  placeholder="Your Name"
                />
                <textarea
                  onChange={this.commentChange}
                  value={ipComment}
                  className="com-input"
                  type="text"
                  placeholder="Your Comment"
                  rows="7"
                  cols="50"
                />
                <button className="add-btn" type="submit">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="counts">
          <p className="count">{commentList.length}</p>
          <p className="comments">Comments</p>
        </div>
        <ul>
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              commentDetailsList={each}
              likeFunc={this.likeFunc}
              delFunc={this.delFunc}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
