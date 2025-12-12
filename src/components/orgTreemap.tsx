"use client";

import React from "react";
import dynamic from "next/dynamic";

// Plotly는 SSR 불가능 → 클라이언트 사이드 렌더링 전용 import
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function OrgTreemap() {
  // -----------------------------
  // 1) 파이썬 데이터 그대로 JS로 변환
  // -----------------------------
  const data = {
    label: [
      "플랫폼사업부문",
      "EMR개발본부", "SmartA10 개발본부", "사업운영본부", "WEHAGO개발센터",
      "고객지원센터", "플랫폼개발센터", "플랫폼서비스기획센터",

      "EMR개발센터", "WEHAGOH개발센터",

      "SmartA10개발센터", "SmartA10설계센터",

      "사업기획Unit", "사업운영Unit", "영업지원/정산Unit", "의료사업Unit",

      "EMR진료Unit", "EMR간호Unit", "진료지원Unit", "EMR원무Unit", "EMR개보험심사Unit",

      "개발1Unit_S10", "개발2Unit_S10",

      "설계1Unit", "설계2Unit", "기획Unit_S10",

      "기획Unit", "개발1Unit", "개발2Unit",

      "WEHAGO개발2Unit", "WEHAGO개발1Unit", "WEHAGO개발3Unit", "공공플랫폼개발Unit",

      "고객서비스혁신Unit", "고객지원Unit1", "고객지원Unit2",

      "WEHAGO공통Unit", "동물MR개발Unit",

      "콘텐츠개발Unit", "플랫폼서비스기획Unit", "플랫폼운영Unit",
      "데이터사이언스Unit", "데이터인사이트Unit", "데이터플랫폼개발Unit"
    ],

    parent: [
      "",

      "플랫폼사업부문", "플랫폼사업부문", "플랫폼사업부문", "플랫폼사업부문",
      "플랫폼사업부문", "플랫폼사업부문", "플랫폼사업부문",

      "EMR개발본부", "EMR개발본부",

      "SmartA10 개발본부", "SmartA10 개발본부",

      "사업운영본부", "사업운영본부", "사업운영본부", "사업운영본부",

      "EMR개발센터", "EMR개발센터", "EMR개발센터", "EMR개발센터", "EMR개발센터",

      "SmartA10개발센터", "SmartA10개발센터",

      "SmartA10설계센터", "SmartA10설계센터", "SmartA10설계센터",

      "WEHAGOH개발센터", "WEHAGOH개발센터", "WEHAGOH개발센터",

      "WEHAGO개발센터", "WEHAGO개발센터", "WEHAGO개발센터", "WEHAGO개발센터",

      "고객지원센터", "고객지원센터", "고객지원센터",

      "플랫폼개발센터", "플랫폼개발센터",

      "플랫폼서비스기획센터", "플랫폼서비스기획센터", "플랫폼서비스기획센터",
      "플랫폼서비스기획센터", "플랫폼서비스기획센터", "플랫폼서비스기획센터"
    ],

    value: [
      null,
      45.2, 29.4, 25.4, 31.0,
      23.9, 13.7, 31.4,

      58.2, 41.8,

      68.6, 31.4,

      4.6, 29.6, 22.7, 43.2,

      20.0, 22.2, 17.8, 22.2, 17.8,

      54.3, 45.7,

      40.0, 46.7, 13.3,

      27.3, 42.4, 30.3,

      31.9, 23.2, 29.0, 15.9,

      11.3, 71.7, 17.0,

      71.0, 29.0,

      10.0, 18.6, 11.4, 15.7, 27.1, 17.1
    ],

    text: [
      null,
      80, 52, 45, 70,
      54, 31, 71,

      46, 33,

      35, 16,

      2, 13, 10, 19,

      9, 10, 8, 10, 8,

      19, 16,

      6, 7, 2,

      9, 14, 10,

      22, 16, 20, 11,

      6, 38, 9,

      22, 9,

      7, 13, 8, 11, 19, 12
    ],
  };

  // -----------------------------------------
  // 2) 파이썬 로직 100% 동일하게 JS로 구현
  // -----------------------------------------

  // DataFrame처럼 사용할 가상 배열 구조
  const df = data.label.map((_, i) => ({
    label: data.label[i],
    parent: data.parent[i],
    size: data.text[i], // 초기 값 = text
    text: data.text[i],
  }));

  // 부모 리스트
  const labelList = data.label;

  // 부모 size = 자식 text 합으로 덮어쓰기
  labelList.forEach((parent) => {
    const children = df.filter((row) => row.parent === parent);
    if (children.length > 0) {
      const sum = children.reduce((acc, r) => acc + (r.text ?? 0), 0);
      df.forEach((row) => {
        if (row.label === parent) row.size = sum;
      });
    }
  });

  // 루트 처리
  const rootChildren = df.filter((row) => row.parent === "플랫폼사업부문");
  const rootSum = rootChildren.reduce((acc, r) => acc + (r.text ?? 0), 0);
  df.forEach((row) => {
    if (row.label === "플랫폼사업부문") {
      row.size = rootSum;
      row.text = rootSum;
    }
  });

  // 부모 대비 비율 계산
  const df2 = df.map((row) => {
    const siblings = df.filter((r) => r.parent === row.parent);
    const siblingSum = siblings.reduce((acc, r) => acc + (r.size ?? 0), 0);

    const ratio = siblingSum > 0 ? ((row.size ?? 0) / siblingSum) : 1.0;

    return {
      ...row,
      ratio_parent: ratio,
    };
  });

  // Plotly 입력 데이터 생성
  return (
    <Plot
      data={[
        {
          type: "treemap",
          labels: df2.map((r) => r.label),
          parents: df2.map((r) => r.parent),
          values: df2.map((r) => r.size),
          customdata: df2.map((r) => [r.ratio_parent, r.text]),
          texttemplate: "%{label}<br>(%{customdata[0]:.1%}, %{customdata[1]}명)",
          textinfo: "label+text",
          branchvalues: "total",
        },
      ]}
      layout={{
        title: "조직 트리맵 (Section → Department → Center → Unit)",
        uniformtext: { minsize: 7, mode: "show" },
        margin: { t: 50, l: 25, r: 25, b: 25 },
      }}
      style={{ width: "100%", height: "800px" }}
    />
  );
}
