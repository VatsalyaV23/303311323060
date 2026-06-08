import {
  NotificationService
} from "./services/notificationService";

const service =
  new NotificationService();

for (
  let i = 1;
  i <= 20;
  i++
) {
  service.receive({
    id: i.toString(),
    title:
      `Notification ${i}`,
    message:
      `Message ${i}`,
    category: "General",
    priority:
      Math.floor(
        Math.random() * 100
      ),
    timestamp:
      Date.now(),
  });
}

console.log(
  "\nTop Notifications\n"
);

console.table(
  service.getTop10()
);