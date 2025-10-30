import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import usersRouter from './routes/users.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

//body parser middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false}));

// Static files 
// app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/users', usersRouter);


// 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});


// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error' });
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

import { logger } from './utils/logger.js';
app.use(logger);





