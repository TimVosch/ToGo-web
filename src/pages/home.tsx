import { h, Component, ComponentChild } from "preact";
import { Navigation } from "../components/navigation/navigation";
import { InputCard } from "../components/input-card/input-card";
import { TodoService } from "../services/todo/todo.service";
import { TodoCard } from "../components/todo-card";

export class HomePage extends Component {
  private readonly todos = new TodoService();

  constructor() {
    super();
    this.state = {};
  }

  addTodo(): void {
    alert(this.constructor.name);
  }

  fetchTodos(): ComponentChild[] {
    const items = this.todos
      .getTodos()
      .map((todo) => <TodoCard key={todo.id} todo={todo} />);

    return items;
  }

  render(): ComponentChild {
    const todos = this.fetchTodos();
    return (
      <div>
        <Navigation />
        <InputCard
          placeholder="Add new todo..."
          value="Add"
          onSubmit={this.addTodo.bind(this)}
        />
        {todos}
      </div>
    );
  }
}
