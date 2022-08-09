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

//mission 1
const createUser = (req, res) => {
  const user = req.body.data; // 프론트에서 받아온 정보를 가져옵니다.
  const { id, name, email, password } = req.body.data;

  //javaScript의 특징 중 하나 : key와 value 값이 똑같으면 안써도 됨...! 대박
  users.push({ id, name, email, password });

  console.log("after: ", users);

  res.json({ message: "USER_CREATED" });
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드를 활용합니다.
};

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
];

//mission 2
const createPost = (req, res) => {
  const user = req.body.post;
  const { id, title, content, userId } = req.body.post;

  posts.push({ id, title, content, userId });

  console.log("after: ", posts);

  res.json({ message: "postCreated" });
};

module.exports = { createUser, createPost };
