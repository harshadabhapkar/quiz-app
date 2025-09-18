📘 **Grammar Quiz App**

This is a MERN stack project (MongoDB, Express.js, React.js, Node.js) where users can register, log in, and take a grammar quiz. The app is designed with a fully responsive UI and reusable components.

🚀 **Features**

**Register & Login**:
Implemented authentication using Node.js and MongoDB. Users can register and log in securely.

**Grammar Test**:
After login, users can take a test where sentences with grammatical mistakes are displayed.
When the user clicks Edit, the input fields become enabled to correct the sentences.
After submitting, the app shows the score out of 3 (how many sentences were corrected correctly).
To avoid showing the same sentences every time, different sentence sets are displayed alternatively using React’s useEffect hook.

**UI**:
Entire UI is built in React with responsive design according given figma.
Components are written for reusability and clean code structure.

**Backend**:
For registration and login, APIs are implemented with Node.js and Express.js, connected to MongoDB Atlas.
For the test, the answers are posted to the backend API and evaluated.
MongoDB database is connected through Atlas cluster created under my account.

🔗 **Routes**:
/ → Register
/ Login Page
/test → Grammar Test Page
/result → Result Page (shows corrected answers and score)

💡 **Key Point**s:
Fully responsive UI with reusable components.
Register & Login implemented with Node.js and MongoDB.
Grammar test with edit and score evaluation functionality.
Sentence sets shown alternatively using useEffect in React.
Database connected to MongoDB Atlas cluster.
Integration with Context API(axios library). 

🧑‍💻 Author:
Harshada Bhapkar
📧 Email: harshadabhapkar28@gmail.com
🔗 LinkedIn
