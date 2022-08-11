//mission 1 회원가입
const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const createUser = (req, res) => {
  const user = req.body.data;
  const { id, name, email, password } = req.body.data;

  //javaScript의 특징 중 하나 : key와 value 값이 똑같으면 안써도 됨
  users.push({ id, name, email, password });

  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드 활용
  res.status(201).json({ message: "USER_CREATED" });
};

//mission 2 게시글 등록
let posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
  {
    id: 3,
    title: "HTTP의 구조",
    content: "구조를 배워보자",
    userId: 2,
  },
];

const createPost = (req, res) => {
  const { id, title, content, userId } = req.body.post;

  posts.push({ id, title, content, userId });

  console.log("after: ", posts);

  res.json({ message: "postCreated" });
};

//mission 3 게시글목록 조회
const PostsList = (req, res) => {
  let postList = posts.map((post) => {
    const user = users.find((user) => post.userId === user.id);
    return {
      userID: user.id,
      userName: user.name,
      postingId: post.id,
      postingTitle: post.title,
      postingContent: post.content,
    };
  });

  res.status(200).json({ data: postList });
};

//mission 4 게시글 수정
const updatePost = (req, res) => {
  const { id, content } = req.body;

  const post = posts.find((post) => post.id === id);
  const user = users.find((user) => user.id === post.userId);
  const newPost = {
    userId: user.id,
    userName: user.name,
    postingId: post.id,
    postingTitle: post.title,
    postingContent: content,
  };
  res.status(200).json({ data: newPost });
};

//mission 5 게시글 삭제
const deletePost = (req, res) => {
  const id = req.body.id;
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json({ message: "postingDeleted" });
};

//mission 6 유저와 게시글 조회
const userAndPost = (req, res) => {
  const userId = req.body.id;
  const user = users.find((user) => user.id === userId);
  const newPosts = posts.filter((post) => post.userId === user.id);
  const result = {
    userID: user.id,
    userName: user.name,
    postings: newPosts,
  };

  res.status(200).json({ data: result });
};

module.exports = {
  createUser,
  createPost,
  PostsList,
  updatePost,
  deletePost,
  userAndPost,
};
