const jwt = require('jsonwebtoken');
const pool = require('../connections/DB.connect.js');


const verifyRole = (requiredRole) => {
    return async (req, res, next) => {
        try {
            // const token = req.cookies.farmfresh_token;
            /// admin
            //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjMWNmYzE2LTljYzItNGQ4OS1hMzU3LTliMWRmZjJjZTYxNiIsIm5hbWUiOiJEaHJ1diBCb2doYW5pIiwiZW1haWwiOiJkaHJ1dkBleGFtcGxlLmNvbSIsInJvbGUiOiJmYXJtZXIiLCJpYXQiOjE3NTQ1NTAzNDl9.J9kMQpWfGfbLYyC4xkf--6Gma0SB388AOg2ARYKrBto';

            //// user 
           // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4NWNjNzczLWU0YzAtNDE3Zi1iM2RiLWNjODRkNGM4MDgxYSIsIm5hbWUiOiJEaHJ1diBCb2doYW5pIiwiZW1haWwiOiJkQGQuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU0NTUwNDMzfQ.x9bAZ-6SZ1-ErcDhTp8ElXEhJzXfzMsl59RQRdEGzRk"
            
            //// buyer
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVmMzRkNzMyLTNkZGItNDNjYi04ZDM5LTdmNjZkODg4Y2Q4NyIsIm5hbWUiOiJidXllciIsImVtYWlsIjoiY0BjLmNvbSIsInJvbGUiOiJidXllciIsImlhdCI6MTc1NDU1ODEwOH0.YSuWQtNkvSxVmLxJ1lNiesyG_778pUnQ1JvAghZ6EOs"

            if (!token) {
                return res.status(401).json({ message: 'Access denied. No token provided.' });
            }

            const data = jwt.verify(token, process.env.JWT_SECRET);
            const userId = data.id;

            const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

            if (result.rows.length === 0) {
                return res.status(404).json({ message: 'User not found.' });
            }

            const user = result.rows[0];

            if (user.role !== requiredRole) {
                return res.status(403).json({ message: `Access denied. ${requiredRole} role required.` });
            }

            req.user = user; // Attach user for downstream use
            next();
        } catch (err) {
            console.error(`${requiredRole} check error:`, err);
            return res.status(401).json({ message: 'Invalid or expired token.' });
        }
    };
};

// Export middleware for each role
module.exports = {
    checkAdmin: verifyRole('admin'),
    checkFarmer: verifyRole('farmer'),
    checkBuyer: verifyRole('buyer')
};
