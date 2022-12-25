import { InMemoryNotificationsRepository } from '../repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const repositoryTest = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(repositoryTest);
    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });
    expect(repositoryTest.notifications).toHaveLength(1);
  });
});
