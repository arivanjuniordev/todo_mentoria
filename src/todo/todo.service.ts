import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './repositories/todo.repository';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(createTodoDto: CreateTodoDto): Todo {
    return this.todoRepository.create(createTodoDto);
  }

  findAll(): Todo[] {
    return this.todoRepository.findAll();
  }

  findOne(id: number): Todo {
    return this.todoRepository.findOne(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto);
  }

  remove(id: number): boolean {
    return this.todoRepository.remove(id);
  }
}
