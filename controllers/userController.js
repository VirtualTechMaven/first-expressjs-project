// controllers/userController.js

// In-memory users array
let users = [
    { id: 1, name: "Chioma Princess Ohwo", email: "ohwoprincess@gmail.com", role: "admin" },
    { id: 1, name: "Humphrey Lourdes", email: "humphreylourdes@gmail.com", role: "editor" },
    { id: 1, name: "Williams Godswill", email: "williamsgodswill@gmail.com", role: "subscriber" },
];

// getallusers
export const getallusers = (req, res) => {
    res.json(users);
};

// getuserbyID
export const getuserbyID = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) res.json(user);
    else res.status(404).json({ message: 'user not found' });
};

// createanewuser
export const createanewuser = (req, res) => {
    try{
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    };
    users.push(newUser);
    res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user' });
    }
};

// updateauserbyID
export const updateauserbyID = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'user not found' });
    }
};

// deleteauserbyID
export const deleteauserbyID = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json({ message: 'user deleted successfully' });
    } else {
        res.status(404).json({ message: 'user not found' });
    }
};
