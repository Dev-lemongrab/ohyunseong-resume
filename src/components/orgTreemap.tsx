"use client";

import React from "react";
import dynamic from "next/dynamic";

const Plot: any = dynamic(() => import("react-plotly.js"), { ssr: false });

type RawData = {
  label: string[];
  parent: string[];
  value: (number | null)[];
  text: (number | null)[];
};

type Node = {
  id: string;               // unique id
  label: string;            // display label
  parentLabel: string;      // original parent label
  parentId: string;         // unique parent id (root = "")
  percent: number | null;   // display percent (original)
  headcount: number | null; // display count (original)
  plotValue: number;        // drawing value (fixed to avoid warnings/blank)
};

export default function OrgTreemap() {
  // 1) 최신 데이터 그대로
  const data: RawData = {
    label: [
      "플랫폼사업부문",
      "EMR개발본부",
      "SmartA10 개발본부",
      "사업운영본부",
      "WEHAGO개발센터",
      "고객지원센터",
      "플랫폼개발센터",
      "플랫폼서비스기획센터",
      "공통기술센터",
      "EMR개발센터",
      "WEHAGOH개발센터",
      "SmartA10개발센터",
      "SmartA10설계센터",
      "사업기획Unit",
      "사업운영Unit",
      "영업지원/정산Unit",
      "의료사업Unit",
      "EMR진료Unit",
      "EMR간호Unit",
      "진료지원Unit",
      "EMR원무Unit",
      "EMR개보험심사Unit",
      "개발1Unit",
      "개발2Unit",
      "설계1Unit",
      "설계2Unit",
      "기획Unit",
      "기획Unit",
      "개발1Unit",
      "개발2Unit",
      "WEHAGO개발1Unit",
      "WEHAGO개발2Unit",
      "WEHAGO개발3Unit",
      "공공플랫폼개발Unit",
      "고객서비스혁신Unit",
      "고객지원Unit",
      "플랫폼운영Unit",
      "데이터사이언스Unit",
      "데이터인사이트Unit",
      "데이터플랫폼개발Unit",
      "WEHAGO공통Unit",
      "동물MR개발Unit",
      "콘텐츠개발Unit",
      "플랫폼서비스기획Unit",
    ],
    parent: [
      "",
      "플랫폼사업부문",
      "플랫폼사업부문",
      "플랫폼사업부문",
      "플랫폼사업부문",
      "플랫폼사업부문",
      "플랫폼사업부문",
      "플랫폼사업부문",
      "플랫폼사업부문",
      "EMR개발본부",
      "EMR개발본부",
      "SmartA10 개발본부",
      "SmartA10 개발본부",
      "사업운영본부",
      "사업운영본부",
      "사업운영본부",
      "사업운영본부",
      "EMR개발센터",
      "EMR개발센터",
      "EMR개발센터",
      "EMR개발센터",
      "EMR개발센터",
      "SmartA10개발센터",
      "SmartA10개발센터",
      "SmartA10설계센터",
      "SmartA10설계센터",
      "SmartA10설계센터",
      "WEHAGOH개발센터",
      "WEHAGOH개발센터",
      "WEHAGOH개발센터",
      "WEHAGO개발센터",
      "WEHAGO개발센터",
      "WEHAGO개발센터",
      "WEHAGO개발센터",
      "고객지원센터",
      "고객지원센터",
      "공통기술센터",
      "공통기술센터",
      "공통기술센터",
      "공통기술센터",
      "플랫폼개발센터",
      "플랫폼개발센터",
      "플랫폼서비스기획센터",
      "플랫폼서비스기획센터",
    ],
    value: [
      null,
      45.2,
      29.4,
      25.4,
      31.0,
      23.9,
      13.7,
      9.3,
      22.1,
      58.2,
      41.8,
      68.6,
      31.4,
      4.6,
      29.6,
      22.7,
      43.2,
      20.0,
      22.2,
      17.8,
      22.2,
      17.8,
      54.3,
      45.7,
      40.0,
      46.7,
      13.3,
      27.3,
      42.4,
      30.3,
      23.2,
      31.9,
      29.0,
      15.9,
      11.3,
      88.7,
      16.0,
      22.0,
      38.0,
      24.0,
      71.0,
      29.0,
      35.0,
      65.0,
    ],
    text: [
      null,
      80,
      52,
      45,
      70,
      54,
      31,
      21,
      50,
      46,
      33,
      35,
      16,
      2,
      13,
      10,
      19,
      9,
      10,
      8,
      10,
      8,
      19,
      16,
      6,
      7,
      2,
      9,
      14,
      10,
      16,
      22,
      20,
      11,
      6,
      47,
      8,
      11,
      19,
      12,
      22,
      9,
      7,
      13,
    ],
  };

  // 2) unique id 만들기 (중복 label/parent 안전)
  const keyCount = new Map<string, number>();
  const labelToFirstId = new Map<string, string>();

  const baseRows = data.label.map((label, i) => {
    const parentLabel = data.parent[i] ?? "";
    const baseKey = `${parentLabel}||${label}`;
    const n = (keyCount.get(baseKey) ?? 0) + 1;
    keyCount.set(baseKey, n);

    const id = n === 1 ? baseKey : `${baseKey}__${n}`;

    if (!labelToFirstId.has(label)) labelToFirstId.set(label, id);

    return {
      id,
      label,
      parentLabel,
      percent: data.value[i] ?? null,
      headcount: data.text[i] ?? null,
    };
  });

  let nodes: Node[] = baseRows.map((r) => ({
    id: r.id,
    label: r.label,
    parentLabel: r.parentLabel,
    parentId: r.parentLabel ? (labelToFirstId.get(r.parentLabel) ?? "") : "",
    percent: r.percent,
    headcount: r.headcount,
    plotValue: 0,
  }));

  // children map
  const rebuildChildrenMap = () => {
    const childrenByParent = new Map<string, Node[]>();
    nodes.forEach((n) => {
      if (!childrenByParent.has(n.parentId)) childrenByParent.set(n.parentId, []);
      childrenByParent.get(n.parentId)!.push(n);
    });
    return childrenByParent;
  };

  // 3) 잔여(부모-자식 차이)를 "빈칸"이 아닌 "잔여 노드"로 채우기
  //    → branchvalues="total"에서도 경고/빈칸 없이 꽉 참
  const childrenByParent0 = rebuildChildrenMap();

  // 부모 후보: 누군가의 parent로 등장하는 label
  const parentLabelSet = new Set(data.parent.filter((p) => p));

  // (1) 우선 leaf는 plotValue = headcount
  nodes.forEach((n) => {
    const children = childrenByParent0.get(n.id) ?? [];
    if (children.length === 0) n.plotValue = n.headcount ?? 0;
  });

  // (2) 아래에서 위로 parent plotValue 계산 + 잔여 노드 추가
  // depth 없이도 “반복해서 안정화” 방식으로 처리 (노드 수 적어서 안전)
  for (let loop = 0; loop < 6; loop++) {
    const childrenByParent = rebuildChildrenMap();

    nodes.forEach((p) => {
      const children = childrenByParent.get(p.id) ?? [];
      if (children.length === 0) return;

      const childrenSum = children.reduce((acc, c) => acc + (c.plotValue ?? 0), 0);
      const parentCount = p.headcount ?? 0;

      // 그리기용 부모값: 최소 자식합은 보장 (parent < children이면 경고 방지)
      p.plotValue = Math.max(parentCount, childrenSum);

      // 부모가 더 큰 경우(45 vs 44): 차이를 잔여 노드로 추가해서 "빈공간 0"
      const diff = parentCount - childrenSum;
      const remainderId = `${p.id}||__remainder`;

      // 기존 잔여 노드 있으면 제거 후 다시 추가(데이터 바뀌어도 안정)
      nodes = nodes.filter((n) => n.id !== remainderId);

      if (diff > 0) {
        nodes.push({
          id: remainderId,
          label: "잔여", // 텍스트 원치 않으면 ""로 바꿔도 됨
          parentLabel: p.label,
          parentId: p.id,
          percent: null,     // 표시는 0으로 찍힘
          headcount: diff,   // 잔여 인원
          plotValue: diff,   // 면적 채우기
        });
      }
    });
  }

  // root(플랫폼사업부문) plotValue도 자식합 이상으로 맞춤
  {
    const childrenByParent = rebuildChildrenMap();
    const root = nodes.find((n) => n.parentId === "" && n.parentLabel === "");
    if (root) {
      const rootChildren = childrenByParent.get(root.id) ?? [];
      const sum = rootChildren.reduce((acc, c) => acc + (c.plotValue ?? 0), 0);
      root.plotValue = Math.max(root.headcount ?? 0, sum);
    }
  }

  // 4) Plotly 입력
  const ids = nodes.map((n) => n.id);
  const labels = nodes.map((n) => n.label);
  const parents = nodes.map((n) => n.parentId);
  const values = nodes.map((n) => n.plotValue);

  // 표시용 (value%, text명) — 잔여는 percent 없으니 0.0%로 표시
  const customdata = nodes.map((n) => [n.percent ?? 0, n.headcount ?? 0]);

  return (
    <Plot
      data={[
        {
          type: "treemap",
          ids,
          labels,
          parents,
          values,
          branchvalues: "total", // ✅ 잔여 노드 덕분에 빈공간 없이 깔끔하게 채움

          customdata,
          texttemplate: "%{label}<br>(%{customdata[0]:.1f}%, %{customdata[1]:.0f}명)",
          textinfo: "text",

          hovertemplate:
            "<b>%{label}</b><br>" +
            "표기 비율: %{customdata[0]:.1f}%<br>" +
            "표기 인원: %{customdata[1]:.0f}명<br>" +
            "면적값: %{value:.0f}<extra></extra>",
        },
      ]}
      layout={{
        title: "조직 트리맵 (Section → Department → Center → Unit)",
        uniformtext: { minsize: 7, mode: "show" },
        margin: { t: 50, l: 25, r: 25, b: 25 },
      }}
      style={{ width: "100%", height: "800px" }}
      config={{ responsive: true, displayModeBar: false }}
    />
  );
}
