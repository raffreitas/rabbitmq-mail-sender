import { FakeMessageQueue } from "@/test/queue/fake-message-queue";
import { InMemoryMailRepository } from "@/test/repositories/in-memory-mail.repository";
import { AddEmailForShippingUseCase } from "./add-email-for-shipping";

const makeSut = () => {
  const mailRepository = new InMemoryMailRepository();
  const messageQueue = new FakeMessageQueue();
  const sut = new AddEmailForShippingUseCase(mailRepository, messageQueue);

  return { sut, mailRepository, messageQueue };
};

describe("Add Mail For Shipping Use Case", () => {
  it("should be able to create and add mail for shipping", async () => {
    const { sut, mailRepository, messageQueue } = makeSut();

    const mailOptions = {
      from: "any@testing.com",
      destination: "another_any@testing.com",
      subject: "any_subject",
      content: "any_content",
    };

    await sut.execute(mailOptions);

    expect(mailRepository.items).toHaveLength(1);
    expect(messageQueue.items[0].mail).toEqual(expect.any(String));
  });
});
