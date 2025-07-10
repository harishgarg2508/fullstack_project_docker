import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendTestEmail() {
    await this.mailerService.sendMail({
      to: 'test@example.com',
      subject: 'MailHog Test',
      text: 'This is the mail from mailhog',
    });
  }
}
