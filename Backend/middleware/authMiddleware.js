const jet=require('jsonwebtoken');

const authenticateToken=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(!token) return res.status(401).json({message:"Token missing"})

        jet.verify(token.split(' ')[1],process.env.jetSecret,(err,user)=>{
            if(err) return res.sendStatus(403)
                req.user=user;
            next();
            })
        }
        
        const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.status(403).json({ message: 'Access Denied' });
    next();
  };
};

module.exports = { authenticateToken, authorizeRoles };