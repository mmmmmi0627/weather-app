import TodoApp from "../components/TodoApp";

export const metadata = {
  title: "ToDo リスト",
  description: "期日・カテゴリ・重要度付きの ToDo リスト",
};

export default function TodoPage() {
  return <TodoApp />;
}
