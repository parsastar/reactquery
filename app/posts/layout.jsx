export default function PostLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
export const metadata = {
  title: "Post",
  description: "Post",
  date: "2021-10-10",
  tags: ["post"],
};
