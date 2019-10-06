import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const user = await User.findByPk(req.userId);

    const notifications = await Notification.find({
      user: user.id,
    })
      .sort({ createdAt: 'desc' })
      .limit(10);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
