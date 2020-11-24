import React, { useState } from "react";
import styled from "styled-components";
import { Table, Button } from "antd";
import Modalog from "./Modalog";

export interface Record {
  //onRow프로퍼티를 통해 만들어진 record의 타입지정
  key: string;
  title: string;
  date: string;
  contents: string;
}

const Container = styled.div`
  max-width: 100%;
`;

const { Column } = Table;

export const result = [
  {
    key: "1",
    title: "도둑들",
    date: "10/23",
    contents:
      "한 팀으로 활동 중인 한국의 도둑 뽀빠이와 예니콜, 씹던껌, 잠파노. 미술관을 터는데 멋지게 성공한 이들은 뽀빠이의 과거 파트너였던 마카오박이 제안한 홍콩에서의 새로운 계획을 듣게 된다. 여기에 마카오박이 초대하지 않은 손님, 감옥에서 막 출소한 금고털이 팹시가 합류하고 5명은 각자 인생 최고",
  },
  {
    key: "2",
    title: "베테랑",
    date: "8/2",
    contents:
      "한 번 꽂힌 것은 무조건 끝을 보는 행동파 ‘서도철’(황정민), 20년 경력의 승부사 ‘오팀장’(오달수), 위장 전문 홍일점 ‘미스봉’(장윤주), 육체파 ‘왕형사’(오대환), 막내 ‘윤형사’(김시후)까지 겁 없고, 못 잡는 것 없고, 봐 주는 것 없는 특수 강력사건 담당 광역수사대. 오랫동안 쫓던 대형 범죄를 해결한 후 숨을",
  },
  {
    key: "3",
    title: "곡성",
    date: "2/13",
    contents:
      "낯선 외지인(쿠니무라 준)이 나타난 후 벌어지는 의문의 연쇄 사건들로 마을이 발칵 뒤집힌다. 경찰은 집단 야생 버섯 중독으로 잠정적 결론을 내리지만 모든 사건의 원인이 그 외지인 때문이라는 소문과 의심이 걷잡을 수 없이 퍼져 나간다. 경찰 ‘종구’(곽도원)는 현장을 목격했다는 여인 ‘무명’(천우희)",
  },
  {
    key: "4",
    title: "기생충",
    date: "5/29",
    contents:
      "전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모...",
  },
  {
    key: "5",
    title: "부산행",
    date: "6/4",
    contents:
      "정체불명의 바이러스가 전국으로 확산되고 대한민국 긴급재난경보령이 선포된 가운데, 열차에 몸을 실은 사람들은 단 하나의 안전한 도시 부산까지 살아가기 위한 치열한 사투를 벌이게 된다. 서울에서 부산까지의 거리 442KM 지키고 싶은, 지켜야만 하는 사람들의 극한의 사투!",
  },
  {
    key: "1",
    title: "도둑들",
    date: "10/23",
    contents:
      "한 팀으로 활동 중인 한국의 도둑 뽀빠이와 예니콜, 씹던껌, 잠파노. 미술관을 터는데 멋지게 성공한 이들은 뽀빠이의 과거 파트너였던 마카오박이 제안한 홍콩에서의 새로운 계획을 듣게 된다. 여기에 마카오박이 초대하지 않은 손님, 감옥에서 막 출소한 금고털이 팹시가 합류하고 5명은 각자 인생 최고",
  },
  {
    key: "2",
    title: "베테랑",
    date: "8/2",
    contents:
      "한 번 꽂힌 것은 무조건 끝을 보는 행동파 ‘서도철’(황정민), 20년 경력의 승부사 ‘오팀장’(오달수), 위장 전문 홍일점 ‘미스봉’(장윤주), 육체파 ‘왕형사’(오대환), 막내 ‘윤형사’(김시후)까지 겁 없고, 못 잡는 것 없고, 봐 주는 것 없는 특수 강력사건 담당 광역수사대. 오랫동안 쫓던 대형 범죄를 해결한 후 숨을",
  },
  {
    key: "3",
    title: "곡성",
    date: "2/13",
    contents:
      "낯선 외지인(쿠니무라 준)이 나타난 후 벌어지는 의문의 연쇄 사건들로 마을이 발칵 뒤집힌다. 경찰은 집단 야생 버섯 중독으로 잠정적 결론을 내리지만 모든 사건의 원인이 그 외지인 때문이라는 소문과 의심이 걷잡을 수 없이 퍼져 나간다. 경찰 ‘종구’(곽도원)는 현장을 목격했다는 여인 ‘무명’(천우희)",
  },
  {
    key: "4",
    title: "기생충",
    date: "5/29",
    contents:
      "전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모...",
  },
  {
    key: "5",
    title: "부산행",
    date: "6/4",
    contents:
      "정체불명의 바이러스가 전국으로 확산되고 대한민국 긴급재난경보령이 선포된 가운데, 열차에 몸을 실은 사람들은 단 하나의 안전한 도시 부산까지 살아가기 위한 치열한 사투를 벌이게 된다. 서울에서 부산까지의 거리 442KM 지키고 싶은, 지켜야만 하는 사람들의 극한의 사투!",
  },
  {
    key: "1",
    title: "도둑들",
    date: "10/23",
    contents:
      "한 팀으로 활동 중인 한국의 도둑 뽀빠이와 예니콜, 씹던껌, 잠파노. 미술관을 터는데 멋지게 성공한 이들은 뽀빠이의 과거 파트너였던 마카오박이 제안한 홍콩에서의 새로운 계획을 듣게 된다. 여기에 마카오박이 초대하지 않은 손님, 감옥에서 막 출소한 금고털이 팹시가 합류하고 5명은 각자 인생 최고",
  },
  {
    key: "2",
    title: "베테랑",
    date: "8/2",
    contents:
      "한 번 꽂힌 것은 무조건 끝을 보는 행동파 ‘서도철’(황정민), 20년 경력의 승부사 ‘오팀장’(오달수), 위장 전문 홍일점 ‘미스봉’(장윤주), 육체파 ‘왕형사’(오대환), 막내 ‘윤형사’(김시후)까지 겁 없고, 못 잡는 것 없고, 봐 주는 것 없는 특수 강력사건 담당 광역수사대. 오랫동안 쫓던 대형 범죄를 해결한 후 숨을",
  },
  {
    key: "3",
    title: "곡성",
    date: "2/13",
    contents:
      "낯선 외지인(쿠니무라 준)이 나타난 후 벌어지는 의문의 연쇄 사건들로 마을이 발칵 뒤집힌다. 경찰은 집단 야생 버섯 중독으로 잠정적 결론을 내리지만 모든 사건의 원인이 그 외지인 때문이라는 소문과 의심이 걷잡을 수 없이 퍼져 나간다. 경찰 ‘종구’(곽도원)는 현장을 목격했다는 여인 ‘무명’(천우희)",
  },
  {
    key: "4",
    title: "기생충",
    date: "5/29",
    contents:
      "전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모...",
  },
  {
    key: "5",
    title: "부산행",
    date: "6/4",
    contents:
      "정체불명의 바이러스가 전국으로 확산되고 대한민국 긴급재난경보령이 선포된 가운데, 열차에 몸을 실은 사람들은 단 하나의 안전한 도시 부산까지 살아가기 위한 치열한 사투를 벌이게 된다. 서울에서 부산까지의 거리 442KM 지키고 싶은, 지켜야만 하는 사람들의 극한의 사투!",
  },
  {
    key: "1",
    title: "도둑들",
    date: "10/23",
    contents:
      "한 팀으로 활동 중인 한국의 도둑 뽀빠이와 예니콜, 씹던껌, 잠파노. 미술관을 터는데 멋지게 성공한 이들은 뽀빠이의 과거 파트너였던 마카오박이 제안한 홍콩에서의 새로운 계획을 듣게 된다. 여기에 마카오박이 초대하지 않은 손님, 감옥에서 막 출소한 금고털이 팹시가 합류하고 5명은 각자 인생 최고",
  },
  {
    key: "2",
    title: "베테랑",
    date: "8/2",
    contents:
      "한 번 꽂힌 것은 무조건 끝을 보는 행동파 ‘서도철’(황정민), 20년 경력의 승부사 ‘오팀장’(오달수), 위장 전문 홍일점 ‘미스봉’(장윤주), 육체파 ‘왕형사’(오대환), 막내 ‘윤형사’(김시후)까지 겁 없고, 못 잡는 것 없고, 봐 주는 것 없는 특수 강력사건 담당 광역수사대. 오랫동안 쫓던 대형 범죄를 해결한 후 숨을",
  },
  {
    key: "3",
    title: "곡성",
    date: "2/13",
    contents:
      "낯선 외지인(쿠니무라 준)이 나타난 후 벌어지는 의문의 연쇄 사건들로 마을이 발칵 뒤집힌다. 경찰은 집단 야생 버섯 중독으로 잠정적 결론을 내리지만 모든 사건의 원인이 그 외지인 때문이라는 소문과 의심이 걷잡을 수 없이 퍼져 나간다. 경찰 ‘종구’(곽도원)는 현장을 목격했다는 여인 ‘무명’(천우희)",
  },
  {
    key: "4",
    title: "기생충",
    date: "5/29",
    contents:
      "전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모...",
  },
  {
    key: "5",
    title: "부산행",
    date: "6/4",
    contents:
      "정체불명의 바이러스가 전국으로 확산되고 대한민국 긴급재난경보령이 선포된 가운데, 열차에 몸을 실은 사람들은 단 하나의 안전한 도시 부산까지 살아가기 위한 치열한 사투를 벌이게 된다. 서울에서 부산까지의 거리 442KM 지키고 싶은, 지켜야만 하는 사람들의 극한의 사투!",
  },
];

const ChangeBtnFunction = (text: string, index: number) => {
  console.log(index);
  if (index === 2) {
    // index가 2번일때만 이것이 실행되고 index가 2번이 아닌것들은 밑에 있는 text를 통해 출력이 된다.
    console.log(index);
    return (
      <div style={{ display: "flex" }}>
        <p>{result[index].title}</p>
        <p>new</p>
      </div>
    );
  }
  return text; // index 2번을 제외한 나머지 것들 출력해주는 것(if밖에서 return을 하면 else와 동일한 역할을 한다.)
};

export default function PushMessage() {
  const [recordState, setRecordState] = useState<Record | undefined>(undefined);
  const [visible, setVisible] = useState(false);

  const handleOk = (e: any) => {
    console.log(e);
    setVisible(false);
    setRecordState(undefined);
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false);
    setRecordState(undefined);
  };
  const paramRelay = (record: Record) => {
    setRecordState(record); //undefined인 recordState를 매개변수를 통해 받은 record로 바꿔줬다.
  };

  return (
    <Container>
      <Table
        data-testId="test-table"
        dataSource={result}
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event: any) => {
              // console.log("record", record);
              paramRelay(record);
              setVisible(true);
            },
          };
        }}
      >
        <Column
          title="제목"
          dataIndex="title"
          key="date"
          render={(text, record, index: number) =>
            ChangeBtnFunction(text, index)
          }
        />
        <Column title="날짜" dataIndex="date" key="date" align="right" />
      </Table>
      <Button
        type="primary"
        style={{
          width: "97%",
          margin: "15px auto",
          display: "block",
        }}
      >
        더보기
      </Button>
      <Modalog
        relay={recordState} //record를 relay프롭스에 전달
        visible={visible}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </Container>
  );
}
