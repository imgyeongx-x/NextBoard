import Link from "next/link";

function LoginPage() {
  return (
    <div>
      <div className="container">
        <h1>로그인하기</h1>
        <Link href={`/`}>
          <button>돌아가기</button>
        </Link>
        <form>
          <div>
            <input type="text" placeholder="아이디"/>
          </div>
          <div>
            <input type="password" placeholder="비밀번호"/>
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