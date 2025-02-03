import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ description: 'The title of the todo item' })
  title: string;

  @ApiProperty({ description: 'Status do ToDo', example: false })
  completed: boolean;
}
