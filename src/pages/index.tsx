import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Index() {
  interface Post {
    id: number;
    title: string;
    content: string;
    writer: string;
  }

  const [content, setContent] = useState<Post[]>([]);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    }

    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    fetchPosts();
  }, []);

  const loggedCheck = () => {
    if (!isLogged) {
      alert('로그인이 필요합니다.');
      router.push('/loginPage');
    } else {
      router.push('/registerPage');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <img src="/next.svg" alt="logo" className="logo" />
        <h1>게시판</h1>
      </header>
      <nav className="nav">
        <Link href={`/loginPage`}>
          <button className="button">로그인</button>
        </Link>
        <button className="button" onClick={loggedCheck}>글쓰러 가기</button>
      </nav>
      <main className="main">
        <ul className="post-list">
          {content.map((post) => (
            <li key={post.id} className="post-item">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">{post.content}</p>
              <p className="post-writer">{post.writer}</p>
            </li>
          ))}
        </ul>
      </main>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        .logo {
          width: 100px;
          margin-bottom: 10px;
        }
        .nav {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .button:hover {
          background-color: #005bb5;
        }
        .main {
          width: 100%;
          max-width: 800px;
        }
        .post-list {
          list-style: none;
          padding: 0;
        }
        .post-item {
          background-color: #f9f9f9;
          padding: 20px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .post-title {
          margin: 0 0 10px;
          font-size: 24px;
        }
        .post-content {
          margin: 0 0 10px;
        }
        .post-writer {
          margin: 0;
          font-size: 14px;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default Index;