import Link from "next/link";
// import { useState } from 0"react";

function Index() {

  // const [posts, setPosts] = useState([]);
  

  return (
    <div>
      <div className="container">
        <h1>게시판</h1>
        <Link href={`/loginPage`}>
          <button>로그인</button>
        </Link>
        <Link legacyBehavior href={`/registerPage`}>
          <button>글쓰러 가기</button> 
        </Link>
        <li></li>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
        }
        button {
          width: 300px;
          height: 30px;
          margin-bottom: 10px;
        }
      `}</style>  
    </div>
  )
}

export default Index;