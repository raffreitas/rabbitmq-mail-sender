import { MailProps } from "../entities/mail.entity";

type MailData = Pick<MailProps, "from" | "destination" | "content" | "subject">;

export interface Mailer {
  sendMail(mailData: MailData): Promise<void>;
}
