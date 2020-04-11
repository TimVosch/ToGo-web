import { Todo } from "./todo.model";

/**
 *
 */
export class TodoService {
  private readonly URL: string;
  constructor(
    private readonly baseURL: string = "/api",
    private readonly resourceURI: string = "/todos"
  ) {
    this.URL = baseURL + resourceURI;
  }

  /**
   * Fetch all todos for the current user
   */
  getTodos(): Todo[] {
    return [
      {
        id: 0,
        ownerId: 0,
        title: "Example todo",
      },
    ];
  }
}
