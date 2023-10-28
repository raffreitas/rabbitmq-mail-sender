import { PaginationParams } from "@/core/common/repositories/pagination-params";
import { Mail } from "@/core/entities/mail.entity";
import { MailRepository } from "@/core/repositories/mail.repository";

export class InMemoryMailRepository implements MailRepository {
  items: Mail[] = [];

  async create(mail: Mail): Promise<void> {
    this.items.push(mail);
  }
  async fetchSentMails({ page }: PaginationParams): Promise<Mail[]> {
    return this.items.slice(page * 10, (page + 1) * 10);
  }
}
