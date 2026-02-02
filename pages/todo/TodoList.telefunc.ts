// We use Telefunc (https://telefunc.com) for data mutations.

import * as sqliteQueries from "../../database/sqlite/queries/todos";
import { getContext } from "telefunc";

export async function onNewTodo({ text }: { text: string }) {
  const context = getContext();
  sqliteQueries.insertTodo(context.db, text);
}
