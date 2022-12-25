import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from './notifications-repository';

@Injectable()
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
