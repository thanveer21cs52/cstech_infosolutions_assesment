# 🧠 MERN Stack Developer Machine Test – CSTech Infosolutions

## 👨‍💻 Developed by: Thanveer

This full-stack MERN application was developed as part of a machine test for CSTech Infosolutions. The app provides:

- ✅ Secure Admin Login using JWT
- ✅ Agent Creation and Management
- ✅ Uploading CSV files and Distributing Records among 5 Agents

---

## 🔗 Live Demo (Video)

🎥 [Click to Watch Demo Video](https://drive.google.com/file/d/1_vW85oei097f0masOeYFdwXWu8jHLjWS/view?usp=drive_link)

---

## 📦 Tech Stack

- **Frontend:** React.js (in `/client`)
- **Backend:** Node.js, Express.js (in `/server`)
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Password Encryption:** bcrypt
- **CSV Handling:** `csvtojson`, `xlsx`, `multer`

---

## 📁 Project Structure

```

cstech\_infosolutions\_assesment/
├── client/         # React frontend
├── server/         # Node.js backend
├── README.md

````

---

## ⚙️ Installation & Setup Instructions

### 🧰 Step 1: Clone Repository

```bash
git clone https://github.com/thanveer21cs52/cstech_infosolutions_assesment.git
cd cstech_infosolutions_assesment
````

---

### 🚀 Step 2: Run Backend

```bash
cd server
npm install
```

🔑 Create a `.env` file inside `server/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SALT_ROUNDS=10
```

Then run:

```bash
npm start
```

---

### 🌐 Step 3: Run Frontend

Open a **new terminal**, then:

```bash
cd client
npm install
npm start
```

---

## 🔐 Features & Flow

### 1. ✅ Admin Login

* Form with email & password
* On login, sends JWT token from backend
* Token is stored and used to access protected routes
* Errors shown if credentials invalid

### 2. 👤 Agent Management

* Admin can add agents
* Fields: Name, Email, Mobile (with country code), Password
* Passwords are hashed using bcrypt before saving

### 3. 📁 CSV Upload & List Distribution

* Accepts only `.csv`, `.xlsx`, or `.xls` files
* Each row: FirstName, Phone, Notes
* File is validated and parsed
* Records are **evenly distributed** across 5 agents

  * If total items not divisible by 5, remaining items are distributed one-by-one
* Data is saved in MongoDB
* Admin can view assigned records for each agent

---

## 📁 `.env` Sample

```env
PORT=5000
MONGO_URI=mongodb+srv://youruser:yourpass@cluster.mongodb.net/dbname
JWT_SECRET=your_secure_jwt_token
SALT_ROUNDS=10
```

---

## 🧪 How It Works (App Flow)

1. Admin logs in with email & password
2. JWT is issued and stored
3. Admin can create agent profiles
4. Admin uploads CSV file with tasks
5. Tasks are parsed and distributed to agents equally
6. Each agent's task list is stored and viewable from the dashboard

---

## 📝 UI Screenshots

![Screenshot 2025-05-14 221735](https://github.com/user-attachments/assets/475037a7-3580-4713-8978-c11fa54d6a3f)
![Screenshot 2025-05-14 221744](https://github.com/user-attachments/assets/d44af032-79ec-4587-a51b-3b2f5e17ed82)
![Screenshot 2025-05-14 221809](https://github.com/user-attachments/assets/df6ff47a-f308-484d-b584-af665172679a)
![Screenshot 2025-05-14 221823](https://github.com/user-attachments/assets/a7091b7e-e460-4c22-bfd6-49f68b290252)
![Screenshot 2025-05-14 221750](https://github.com/user-attachments/assets/4f4dbff5-ea08-4ce2-bf29-076490b46bd1)
![Screenshot 2025-05-14 221835](https://github.com/user-attachments/assets/91d7ffa4-3028-4dcd-a748-b5346a8009f4)


---


## 🧰 `.env` File

```env
PORT=5000
MONGO_URI=mongodb+srv://youruser:yourpass@cluster.mongodb.net/dbname
JWT_SECRET=your_secure_jwt_token
SALT_ROUNDS=10
```

---

## 🧪 How It Works (App Flow)

1. Admin logs in with email & password
2. JWT is issued and stored
3. Admin can create agent profiles
4. Admin uploads CSV file with tasks
5. Tasks are parsed and distributed to agents equally
6. Each agent's task list is stored and viewable from the dashboard

---

## 📝 Notes

* Backend includes proper **error handling & validations**
* Frontend is responsive and user-friendly
* Used 50% personal coding and 50% support from ChatGPT for logic structure and development
* Organized, clean code with comments
* Includes `.env.example` for easy configuration

---

## 📎 Additional Links

* 🔗 GitHub Repo: [https://github.com/thanveer21cs52/cstech\_infosolutions\_assesment](https://github.com/thanveer21cs52/cstech_infosolutions_assesment)
* 🎬 Demo Video: [View on Google Drive](https://drive.google.com/file/d/1_vW85oei097f0masOeYFdwXWu8jHLjWS/view?usp=drive_link)

---

## 🙏 Thank You!

This application was built as part of a real-world MERN assessment and showcases my skills in full-stack development. I'm excited to grow further and contribute as a developer.

