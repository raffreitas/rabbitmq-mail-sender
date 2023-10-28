import { MessageQueue } from "@/core/contracts/message-queue";

type Queue = Record<string, string>;

export class FakeMessageQueue implements MessageQueue {
  items: Queue[] = [];

  async consume(
    queue: string,
    callback: (message: unknown, channel: unknown) => void,
  ) {
    const message = this.items.find((item) => item[queue]);

    if (!message) {
      return;
    }

    callback(message[queue], null);

    this.items = this.items.filter((item) => item[queue] !== message[queue]);
  }
  async publish(queue: string, message: string) {
    return !!this.items.push({ [queue]: message });
  }
  async start() {}
}
