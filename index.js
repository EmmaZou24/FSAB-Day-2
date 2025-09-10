import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import { db } from "./util/FirebaseInit.js";
import { collection, getDocs, addDoc } from "firebase/firestore"

const app = express()
const port = 3001;

// Middleware
app.use(express.json())
app.use(
	cors({
		origin: "http://localhost:3000"
	})
)
app.use(bodyParser.urlencoded({ extended: false }))

// Default route
app.get("/", (req, res) => {
    res.send("Hello World!")
})

// Get students
app.get("/students", async (req, res) => {
    console.log("Getting all students")
    const collectionRef = collection(db, "Students")
    const snap = await getDocs(collectionRef)
    // res.send([snap.docs.map(doc => doc.data())])
    const docs = []
	snap.forEach((doc) => {
		docs.push(doc.data())
	})
	res.send(docs)
})

// Add student
app.post("/students", async (req, res) => {
    // console.log("Adding student")
    const studentRef = collection(db, "Students")
    const studentBody = req.body
    try { await addDoc(studentRef, studentBody) }
    catch (e) { 
        console.error("Error adding document: ", e)
        res.status(500)
    }
    res.status(200).send("Student added")
})

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})