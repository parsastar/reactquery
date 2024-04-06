export const metadata = {
  title: "Products",
  description: "This is the Products Page ",
};
export default function ProductsLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
