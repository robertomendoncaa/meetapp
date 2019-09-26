import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User email already exists' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async index(req, res) {
    const user = await User.findAll();

    return res.json(user);
  }

  async update(req, res) {
    console.log(req.userId);

    return res.json();
  }
}

export default new UserController();
