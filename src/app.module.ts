import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './modules/blog/blog.module';
import { PartnersModule } from './modules/partners/partners.module';
import { AwardsModule } from './modules/awards/awards.module';
import { ReviewModule } from './modules/review/review.module';
import { ContactModule } from './modules/contact/contact.module';
import { FaqModule } from './modules/faq/faq.module';
import { CareerModule } from './modules/career/career.module';
import { CareerApplyModule } from './modules/career-apply/career-apply.module';

@Module({
  imports: [
    BlogModule,
    PartnersModule,
    AwardsModule,
    ReviewModule,
    ContactModule,
    FaqModule,
    CareerModule,
    CareerApplyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
