export default function Footer() {
  let date = new Date();
  return (
    <footer className="Footer">
      {date.getFullYear()} - &copy; Copyright received by Vishal
    </footer>
  );
}
