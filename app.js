const express = require('express');
const app = express();

// Middleware สำหรับการแปลง request body ให้เป็น JSON
app.use(express.json());

// ตัวอย่าง endpoint สำหรับการทดสอบ
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Node.js API!' });
});

// ตัวอย่าง endpoint ที่รับ parameter
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId: userId, name: "John Doe" });
});

// สร้าง endpoint สำหรับการสร้างข้อมูล (POST)
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'User created', user: newUser });
});

// กำหนดให้ API รันบนพอร์ต 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
