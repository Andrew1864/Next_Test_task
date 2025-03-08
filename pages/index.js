import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="Test task, Next.js"></meta>
        <title>Test-task</title>
      </Head>
      <div className="parent">
        <span className="box"></span>
      </div>
      <style jsx>{`
        .parent {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
        }

        .box {
          width: 150px;
          height: 150px;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 20px;
          font-weight: bold;
           transition: transform 1s ease-in-out;
        }

        .box:hover {
          transform: rotate(360deg);}
      `}</style>
    </>
  );
};

export default Index;
