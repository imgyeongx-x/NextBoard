import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      router.push("/");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div>
      <div className="container">
        <h1>로그인하기</h1>
        <Link href={`/`}>
          <button>돌아가기</button>
        </Link>
        <form onSubmit={handleLogin}>
          <div>
            <input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              type="text"
              placeholder="아이디"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div>
            <button type="submit">로그인하기</button>
          </div>
        </form>
      </div>
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
        button {
          width: 300px;
          height: 30px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default LoginPage;