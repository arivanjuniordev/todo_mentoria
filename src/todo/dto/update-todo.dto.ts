import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty({
    description: 'The description of the todo item',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: 'The completion status of the todo item',
    required: false,
  })
  completed?: boolean;
}
