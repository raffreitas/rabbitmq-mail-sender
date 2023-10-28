import { PaginationParams } from "../common/repositories/pagination-params";
import { Mail } from "../entities/mail.entity";

export interface MailRepository {
  create(mail: Mail): Promise<void>;
  fetchSentMails(page: PaginationParams): Promise<Mail[]>;
}
