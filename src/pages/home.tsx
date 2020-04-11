import { h, Component, ComponentChild } from "preact";
import { Navigation } from "../components/navigation/navigation";
import { InputCard } from "../components/input-card/input-card";
import { TodoService } from "../services/todo/todo.service";

export class HomePage extends Component {
  todos = new TodoService();

  constructor() {
    super();
    this.state = {};
  }

  addTodo(): void {
    alert(this.constructor.name);
  }

  genList(): ComponentChild[] {
    const items = this.todos.getTodos().map((todo) => (
      <div
        key={todo.id}
        class="flex w-1/2 mx-auto mt-5 shadow-md rounded-lg border-t border-gray-400"
      >
        <input
          type="checkbox"
          name="completed"
          id="todo-completed"
          class="ml-3"
        />
        <div class="p-3 text-md">{todo.title}</div>
      </div>
    ));

    return items;
  }

  render(): ComponentChild {
    const list = this.genList();
    return (
      <div>
        <Navigation />
        <InputCard
          placeholder="Add new todo..."
          value="Add"
          onSubmit={this.addTodo.bind(this)}
        />
        {list}
      </div>
    );
  }
}
