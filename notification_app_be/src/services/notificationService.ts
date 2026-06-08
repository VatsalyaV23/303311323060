import { Notification }
from "../models/notification";

import { PriorityInbox }
from "./priorityInbox";

export class NotificationService {
  private inbox =
    new PriorityInbox();

  receive(
    notification:
      Notification
  ) {
    this.inbox.add(
      notification
    );
  }

  getTop10() {
    return this.inbox.getTopNotifications();
  }
}