import { Link } from "react-router-dom"
import Container from "./Container"

export default function Header() {
  return (
    <header style={{ padding: "20px 0", borderBottom: "1px solid #eee" }}>
      <Container>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ color: "var(--primary)" }}>Kindy</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/programs">Chương trình</Link>
            <Link to="/news">Tin tức</Link>
            <Link to="/contact">Liên hệ</Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}