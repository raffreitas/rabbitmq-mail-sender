import { MessageQueue } from "../contracts/message-queue";
import { Mail } from "../entities/mail.entity";
import { MailRepository } from "../repositories/mail.repository";

export interface AddEmailForShippingInput {
  from: string;
  destination: string;
  subject: string;
  content: string;
}

export class AddEmailForShippingUseCase {
  constructor(
    private readonly mailRepository: MailRepository,
    private readonly messageQueue: MessageQueue,
  ) {}
  async execute({
    from,
    content,
    destination,
    subject,
  }: AddEmailForShippingInput) {
    const mail = Mail.create({
      from,
      content,
      destination,
      subject,
    });

    await this.mailRepository.create(mail);
    await this.messageQueue.publish("mail", mail.toString());
  }
}
