export class CommentController {
  #type = "hike";
  #rootElement = null;
  #commentModel = null;
  #commentView = null;

  constructor(type, rootElement) {
    this.#type = type;
    this.#rootElement = rootElement;
    this.#commentModel = new CommentModel(type);
    this.#commentView = new CommentsView();
    
  }

  showAllComments() {
    this.#commentView.renderComments(rootElement, this.#commentModel.comments());
  }
}

class CommentModel {
  #type = 'hike';
  #comments = [];
  constructor(type) {
    this.#type = type;
    this.loadComments();
  }

  comments() {
    return this.#comments;
  }

  commentsByName(name) {
    return this.#comments.filter(c => c.name == name);
  }

  loadComments() {
    this.#comments = JSON.parse(localStorage.getItem(this.#type)) || [];
  }

  saveComments() {
    localStorage.setItem(this.#type, JSON.stringify(comments));
  }

  addComment(name, comment) {
    const commentObj = {
      name: name,
      content: comment,
      date: new Date(),
    };

    this.#comments.push(commentObj);
    this.saveComments();
  }
}

class CommentsView {

  renderAddComment(parent) {

  }

  renderComments(parent, comments) {
    for(let c of comments) {
      this.renderComment(parent, c);
    }
  }

  renderComment(parent, comment) {
    let container = document.createElement('div');
    let datediv = document.createElement('div');
    let commentdiv = document.createElement('div');
    
    container.classList.add('comment');
    datediv.classList.add('comment-date');
    datediv.innerText = comment.date;
    container.appendChild(datediv);
    commentdiv.classList.add('comment-content');
    commentdiv.innerText = comment.content;
    container.appendChild(commentdiv);

    parent.appendChild(container);
  }
}