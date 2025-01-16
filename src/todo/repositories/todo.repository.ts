import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';

export class TodoRepository {
  private todos: Todo[] = [];
  private id = 1;

  create(dto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.id++,
      title: dto.title,
      completed: false,
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, dto: UpdateTodoDto): Todo {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index] = {
      ...this.todos[index],
      ...dto,
    };

    return this.todos[index];
  }

  remove(id: number): boolean {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todos.length < initialLength;
  }
}
