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
  const user = req.body.data; // 프론트에서 받아온 정보를 가져옵니다.
  const { id, name, email, password } = req.body.data;

  //javaScript의 특징 중 하나 : key와 value 값이 똑같으면 안써도 됨...! 대박
  users.push({ id, name, email, password });

  res.status(201).json({ message: "USER_CREATED" });
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드를 활용합니다.
};

//mission 2 게시글 등록
const posts = [
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
  //const user = req.body.post;
  const { id, title, content, userId } = req.body.post;

  posts.push({ id, title, content, userId });

  console.log("after: ", posts);

  res.json({ message: "postCreated" });
};

//mission 3 게시글목록 조회
const PostsList = (req, res) => {
  res.json({
    data: [
      {
        userID: 1,
        userName: "Rebekah Johnson",
        postingId: 1,
        postingTitle: "간단한 HTTP API 개발 시작!",
        postingContent:
          "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
      },
      {
        userID: 2,
        userName: "Fabian Predovic",
        postingId: 2,
        postingTitle: "HTTP의 특성",
        postingContent: "Request/Response와 Stateless!!",
      },
      {
        userID: 3,
        userName: "new user 1",
        postingId: 3,
        postingImageUrl: "내용 1",
        postingContent: "sampleContent3",
      },
      {
        userID: 4,
        userName: "new user 2",
        postingId: 4,
        postingImageUrl: "내용 2",
        postingContent: "sampleContent4",
      },
    ],
  });
};

//mission 4 게시글 수정
const updatePost = (req, res) => {
  posts.forEach((el, i) => {
    const user = req.body.data;

    if (user["postingId"] == posts[i]["id"]) {
      res.status(200).json({
        data: {
          userId: posts[i]["userId"],
          userName: users[posts[i]["userId"] - 1]["name"],
          postingId: posts[i]["id"],
          postingTitle: posts[i]["title"],
          postingContent: user.postingContent,
        },
      });
    }
  });
};

module.exports = { createUser, createPost, PostsList, updatePost };
