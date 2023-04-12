import { SStackCategory, SStackItem, SStackList, SSubtitle } from "../style/style";


const Stacks = () => {
  return (
    <section>
      <SSubtitle>Stacks</SSubtitle>
      <ul>
        <SStackList>
          <SStackCategory>프로그래밍 언어</SStackCategory>
          <SStackItem>Javascript</SStackItem>
          <SStackItem>HTML</SStackItem>
          <SStackItem>CSS</SStackItem>
        </SStackList>
        <SStackList>
          <SStackCategory>프레임워크 & 라이브러리</SStackCategory>
          <SStackItem>React</SStackItem>
          <SStackItem>Redux</SStackItem>
          <SStackItem>Recoil</SStackItem>
          <SStackItem>Express</SStackItem>
        </SStackList>
        <SStackList>
          <SStackCategory>Others</SStackCategory>
          <SStackItem>Git</SStackItem>
          <SStackItem>AWS(S3)</SStackItem>
          <SStackItem>Postman</SStackItem>
          <SStackItem>Notion</SStackItem>
        </SStackList>
      </ul>
    </section>
  );
}

export default Stacks;

