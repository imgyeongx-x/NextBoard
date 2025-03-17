import Link from "next/link";
import { useState } from "react";

function RegisterPage() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChange = (e) => {
    setTitle(e.target.value);
  }

  const contentChange = (e) => {
    setContent(e.target.value);
  }

  return (
    <div className="container">
      <h1>게시글 작성하기</h1>
      
      <Link href={`/`}>
        <button>돌아가기</button>
      </Link>

      <form>
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
        }
      `}</style>
    </div>
  );
}

export default RegisterPage;