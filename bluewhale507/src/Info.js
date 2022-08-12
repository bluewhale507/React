import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log(name);
    //뒷정리 함수 : 컴포넌트 업데이트직전, 언마운트 되기전 작업 수행
    return () => {
      console.log('cleanup');
      console.log(name);
    }
    //2번째 parameter로 빈 배열 삽입시, componentDidMount와 같은 역할을 함
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
