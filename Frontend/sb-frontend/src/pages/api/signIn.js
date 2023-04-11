

export default function signInHandler(req, res) {
    res.status(200).json({ userName: req.body.username, email: req.body.email })
}