import Link from "next/link";
import { useState } from "react";

function RegisterPage() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  const contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/regPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert("게시글이 등록되었습니다.");
    } else {
      alert("게시글 등록에 실패했습니다.");
    }
  }

  return (
    <div className="container">
      <h1>게시글 작성하기</h1>
      
      <Link href={`/`}>
        <button>돌아가기</button>
      </Link>

      <form onSubmit={handlePost}>
        <div>
          <input onChange={titleChange} value={title} type="text" placeholder="제목"/>
        </div>
        <textarea onChange={contentChange} value={content} placeholder="내용"></textarea>
        <div>
          <button type="submit">등록하기</button>
        </div>
      </form>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
        }
        input {
          width: 300px;
          height: 30px;
          margin-bottom: 10px;
        }
  
        textarea {
          width: 300px;
          height: 200px;
          margin-bottom: 10px;
          resize: none;
        }
        button {
          width: 300px;
          height: 30px;
          margin-bottom: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
      `}</style>
    </div>
  );
}

export default RegisterPage;