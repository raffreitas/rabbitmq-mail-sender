export interface MessageQueue {
  start(): Promise<void>;
  publish(queue: string, message: string): Promise<boolean>;
  consume(
    queue: string,
    callback: (message: unknown, channel: unknown) => void,
  ): Promise<void>;
}
