import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

function Index() {

  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setIsLogged(true);
    }
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
    <div>
      <div className="container">
        <div>
          <img src="/next.svg" alt="logo" /> 
          <h1>게시판</h1>
        </div>
        <Link href={`/loginPage`}>
          <button>로그인</button>
        </Link>
        
          <button onClick={loggedCheck}>글쓰러 가기</button> 
        
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