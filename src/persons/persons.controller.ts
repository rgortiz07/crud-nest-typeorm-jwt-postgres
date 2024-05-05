import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enums/role.enum';
import { ActiveUser } from '../common/decorators/active-user.decorator';
import { ActiveUserInterface } from '../common/interfaces/active-user.interface';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('persons')
@ApiTags('persons')
@ApiBearerAuth()
@ApiUnauthorizedResponse({
  description: 'Unauthorized Bearer Auth',
})
@Auth(Role.USER)
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized Bearer Auth',
  })
  create(
    @Body() createPersonDto: CreatePersonDto,
    @ActiveUser() user: ActiveUserInterface,
  ) {
    return this.personsService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personsService.update(id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personsService.remove(id);
  }
}
