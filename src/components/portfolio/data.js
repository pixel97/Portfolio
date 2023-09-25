import ExpenseTracker from "../../assets/expense.webp";
import TuiterImage from "../../assets/Tuiter.png";
import Guitar from "../../assets/guitar.png";
import BoardGame from "../../assets/boardGame.jpg";
import CalorieTracker from "../../assets/CalorieTracker.webp";
const data = [
  {
    id: 1,
    category: "Java",
    image: BoardGame,
    title: "Multiplayer Board game",
    desc:
      "Board game implementation inspiried by famous Kill Doctor Lucky Game. The application follows MVC framework, various other design patterns and best practices.The game supports multiple features and a automated computer player.",
    Skills: ["Java"],
    //github: "https://github.com/milindbasavaraja/N-Gram-MapReduce",
  },
  {
    id: 2,
    category: "FullStack",
    image: TuiterImage,
    title: "Tuiter",
    desc:
      "An application inspired by the design of Twitter supporting user to post blogs, edit and delete as well. The application supports API calls and built using non relational database such as Mongo DB.",

    // Skills: [
    //   "AWS Kinesis Video Streams",
    //   "AWS Lambda",
    //   "AWS SQS",
    //   "AWS Kinesis Data Streams",
    //   "AWS S3",
    //   "AWS SNS",
    //   "AWS Rekogntion",
    //   "HTML",
    //   "CSS",
    //   "JavaScript",
    //   "Python",
    // ],
    // github: "https://github.com/milindbasavaraja/NYU-Campus-Safety-Surveillance",
  },
  {
    id: 3,
    category: "FullStack",
    image: Guitar,
    title: "SARS",
    desc:
      "SARS is an E-Commerce platform for buying and selling guitars. The application consists of multiple user roles along with guided access. It also supports the payment gateway using Paypal integration.",
    // Skills: ["React", "NodeJs", "MySql"],
    // github: "https://github.com/milindbasavaraja/Cookzilla",
  },
  {
    id: 4,
    category: "FullStack",
    image: ExpenseTracker,
    title: "Expense Tracker",
    desc:
      "An application used to track daily expenses along with add, edit and delete expenses. The expenses can be viewed daily, monthly or yearly basis.",
    // Skills: ["React", "NodeJs", "MySql"],
    // github: "https://github.com/milindbasavaraja/Blog-Post",
  },
  {
    id: 5,
    category: "FullStack",
    image: CalorieTracker,
    title: "Calorie Tracker",
    desc:
        "An application used to track calorie intake of the users. The calories can be viewed daily and monitored with multiple features.",
    // Skills: ["React", "NodeJs", "MySql"],
    // github: "https://github.com/milindbasavaraja/Blog-Post",
  },
  // {
  //   id: 5,
  //   category: "AWS",
  //   image: AWSImage,
  //   title: "Smart Photo Album",
  //   desc:
  //     "Implement a photo album web application, that can be searched using natural language" +
  //     "through both text and voice. You will learn how to use Lex, ElasticSearch, and" +
  //     "Rekognition to create an intelligent search layer to query your photos for people," +
  //     "objects, actions, landmarks using AWS services",
  //   Skills: [
  //     "AWS S3",
  //     "AWS API Gateway",
  //     "AWS Lambda",
  //     "AWS Open-Search",
  //     "AWS Lex",
  //     "AWS Rekognition",
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "Python",
  //   ],
  //   github: "https://github.com/milindbasavaraja/Smart-Photo-Album",
  // },
  // {
  //   id: 6,
  //   category: "AWS",
  //   image: AWSImage,
  //   title: "Dining-Concierge",
  //   desc:
  //     "Implemented a serverless, microservice-driven web application." +
  //     "Specifically, a Dining Concierge chatbot is built that sends users" +
  //     "restaurant suggestions given a set of preferences that users provide the chatbot with" +
  //     "through conversation using AWS services. The data was retrieved from Yelp",
  //   Skills: [
  //     "AWS S3",
  //     "AWS API Gateway",
  //     "AWS Lambda",
  //     "AWS Lex",
  //     "AWS SQS",
  //     "AWS SNS",
  //     "AWS OpenSearch",
  //     "AWS DynamoDb",
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "Python",
  //   ],
  //   github: "https://github.com/milindbasavaraja/Dining-Concierge",
  // },
];

export default data;
