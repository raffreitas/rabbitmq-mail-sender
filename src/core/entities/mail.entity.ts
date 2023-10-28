import { Entity } from "../common/entities/entity";
import { UniqueEntityID } from "../common/entities/unique-entity-id";
import { Optional } from "../common/types/optional";

export interface MailProps {
  from: string;
  destination: string;
  subject: string;
  content: string;
  createdAt: Date;
  sendAt: Date | null;
}

export class Mail extends Entity<MailProps> {
  public get from(): string {
    return this.props.from;
  }

  public get destination(): string {
    return this.props.destination;
  }

  public get subject(): string {
    return this.props.subject;
  }

  public get content(): string {
    return this.props.content;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get sendAt(): Date | null {
    return this.props.sendAt;
  }

  static create(
    props: Optional<MailProps, "createdAt" | "sendAt">,
    id?: UniqueEntityID,
  ): Mail {
    const mail = new Mail(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        sendAt: props.sendAt ?? null,
      },
      id,
    );

    return mail;
  }

  toString() {
    return JSON.stringify({ ...this.props, id: this.id.toString() });
  }
}
