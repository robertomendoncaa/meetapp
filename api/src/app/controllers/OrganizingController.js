import Meetup from '../models/Meetup';
import File from '../models/File';

class OrganizingController {
  async index(req, res) {
    const user_id = req.userId;

    const meetups = await Meetup.findAll({
      where: { user_id },
      // include: [
      //   {
      //     model: File,
      //     as: 'file',
      //     attributes: ['id', 'path', 'url']
      //   }
      // ],
      order: [['date', 'ASC']],
    });

    if (!meetups) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    return res.json(meetups);
  }

  async show(req, res) {
    try {
      const meetup = await Meetup.findByPk(req.params.id, {
        include: [
          {
            model: File,
            as: 'file',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });

      if (!meetup) {
        return res.status(400).json({ error: 'Meetup not found' });
      }

      if (meetup.user_id !== req.userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const subscriptions = await Subscription.findAll({
        where: {
          meetup_id: req.params.id,
        },
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['id', 'name'],
          },
        ],
      });

      return res.status(200).json({ meetup, subscriptions });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export default new OrganizingController();
