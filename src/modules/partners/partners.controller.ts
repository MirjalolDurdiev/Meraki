import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { PartnerEntity } from './entities/partner.entity';
import { PaginationPipe } from 'src/common/pipes/pagination.pipe';
import { PaginationInterface } from 'src/common/interface';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('partners')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post()
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Get()
  @ApiOkResponse({ type: PartnerEntity, isArray: true })
  @ApiQuery({ name: 'take', type: Number, required: false })
  @ApiQuery({ name: 'skip', type: Number, required: false })
  @ApiQuery({ name: 'name', type: String, required: false })
  findAll(@Query(new PaginationPipe()) query: PaginationInterface) {
    return this.partnersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', new PaginationPipe()) id: string) {
    return this.partnersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new PaginationPipe()) id: string,
    @Body() updatePartnerDto: UpdatePartnerDto,
  ) {
    return this.partnersService.update(id, updatePartnerDto);
  }

  @Delete(':id')
  remove(@Param('id', new PaginationPipe()) id: string) {
    return this.partnersService.remove(id);
  }
}
